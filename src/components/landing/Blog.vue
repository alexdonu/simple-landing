<script setup lang="ts">
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

const db = getFirestore();

async function writeToDb() {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      first: "Alexandra",
      last: "Doe",
      born: 1900,
      urls: ["https://example.com", "https://example.com"],
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getCollectionDocs() {
  const querySnapshot = await getDocs(collection(db, "posts"));

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
}
</script>

<template>
  <div class="container">
    <h1 @click="writeToDb">Blog set</h1>
    <h1 @click="getCollectionDocs">Blog get</h1>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: var(--midnight-navy-color);
  padding: 100px 48px;
  justify-content: center;
  width: 100%;
  color: white;
  text-align: center;
}

.rounded-image {
  border-radius: 50%;
  width: 300px;
  height: 300px;
}

@media (min-width: 1280px) {
  .rounded-image {
    width: 545px;
    height: 545px;
  }

  .container {
    width: 50%;
  }
}
</style>
