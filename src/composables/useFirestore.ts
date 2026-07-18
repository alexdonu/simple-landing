import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

type PostData = {
  title: string;
  content: string;
  imagesUrls: string[];
};

type PostDataWithId = PostData & { id: string };

export function useFirestore() {
  const db = getFirestore();
  const writeToDb = async (data: PostData) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), data);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  };

  const getCollectionDocs = async () => {
    console.log("Fetching documents...");
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));

      const docs: PostDataWithId[] = [];
      querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...(doc.data() as PostData) });
      });

      console.log("Fetched documents: ", docs);
      return docs;
    } catch (e) {
      console.error("Error fetching documents: ", e);
    } finally {
      console.log("Finished fetching documents.");
    }
  };

  const getPostById = async (docId: string) => {
    try {
      const docRef = doc(db, "posts", docId); // Reference to the document
      const docSnap = await getDoc(docRef); // Fetch the document

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return { id: docSnap.id, ...docSnap.data() }; // Return the document data
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  const updatePost = async (docId: string, data: PostData) => {
    try {
      await updateDoc(doc(db, "posts", docId), data);
      console.log("Document updated: ", docId);
    } catch (e) {
      console.error("Error updating document: ", e);
      throw e;
    }
  };

  const deletePost = async (docId: string) => {
    try {
      await deleteDoc(doc(db, "posts", docId));
      console.log("Document deleted: ", docId);
    } catch (e) {
      console.error("Error deleting document: ", e);
      throw e;
    }
  };

  return {
    writeToDb,
    getCollectionDocs,
    getPostById,
    updatePost,
    deletePost,
  };
}
