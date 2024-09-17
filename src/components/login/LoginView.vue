<script lang="ts" setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");

const router = useRouter();

async function login() {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User authenticated:", user);
      router.push({ path: "/x" });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error on authentication user:", errorCode, errorMessage);
    });
}
</script>

<template>
  <form @submit.prevent="login">
    <label for="email">
      email:
      <input v-model="email" id="email" type="email" />
    </label>

    <br />

    <label for="password">
      Password:
      <input v-model="password" id="password" type="password" />
    </label>

    <br />

    <button @click="login">log in</button>
  </form>
</template>
