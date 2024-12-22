import { ref } from "vue";
import { nanoid } from "nanoid";

import {
  ref as firebaseStorageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getStorage } from "firebase/storage";

export function useStorage() {
  const storage = getStorage();

  function uploadImagesToStorage(
    files: File[],
    path: string
  ): Promise<string[] | null> {
    return new Promise((resolve, reject) => {
      if (!files || files.length === 0) {
        resolve(null);
        return;
      }

      const downloadURLs: string[] = [];
      const uploadTasks = files.map((file) => {
        const uniqueFileName = nanoid();
        const storageRef = firebaseStorageRef(
          storage,
          `${path}/${uniqueFileName}`
        );
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Optional: Track upload progress
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            // Handle unsuccessful uploads
            console.error("Error uploading file:", error);
            reject(error);
          },
          () => {
            // Handle successful uploads
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                downloadURLs.push(downloadURL);
                if (downloadURLs.length === files.length) {
                  resolve(downloadURLs);
                }
              })
              .catch((error) => {
                console.error("Error getting download URL:", error);
                reject(error);
              });
          }
        );

        return uploadTask;
      });

      console.log("All uploaded tasks:", uploadTasks);
    });
  }

  const imageFiles = ref<File[]>([]);
  const imageUrls = ref<string[]>([]);

  const handleFileChange = (event: Event) => {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files) {
      imageFiles.value = Array.from(fileInput.files);
    }
  };

  const uploadImages = async () => {
    if (imageFiles.value.length > 0) {
      const path = "images";
      const urls = await uploadImagesToStorage(imageFiles.value, path);

      if (urls) {
        imageUrls.value = urls;
      }
    }
  };

  return { imageFiles, imageUrls, handleFileChange, uploadImages };
}
