import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  orderBy,
  query,
  deleteDoc,
} from "firebase/firestore";
import type {
  PostData,
  PostDataWithId,
} from "../components/landing/types/types";

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
      const querySnapshot = await getDocs(
        query(collection(db, "posts"), orderBy("createdAt", "desc"))
      );

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

  const deletePost = async (docId: string) => {
    try {
      await deleteDoc(doc(db, "posts", docId));
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return { writeToDb, getCollectionDocs, getPostById, deletePost };
}
