<script lang="ts" setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const router = useRouter();

async function login() {
  errorMessage.value = "";
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User authenticated:", user);
      router.push({ path: "/xadmin" });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage_ = error.message;
      console.error("Error on authentication user:", errorCode, errorMessage_);
      errorMessage.value = "Email sau parolă incorectă.";
    });
}
</script>

<template>
  <div class="login-page">
    <form class="login-card" @submit.prevent="login">
      <h1>Autentificare</h1>

      <div class="field">
        <label for="email">Email</label>
        <input v-model="email" id="email" type="email" required />
      </div>

      <div class="field">
        <label for="password">Parolă</label>
        <input v-model="password" id="password" type="password" required />
      </div>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

      <button type="submit">Autentifică-te</button>
    </form>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--midnight-navy-color);
  padding: 24px;
}

.login-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  padding: 40px 32px;
  background-color: var(--deep-ocean-blue-color);
  border: 1px solid rgba(245, 204, 59, 0.15);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
}

h1 {
  color: var(--white-color);
  font-size: clamp(1.5rem, 5vw, 2rem);
  text-align: center;
  margin-bottom: 8px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-family: var(--font-ui);
  color: var(--gray-color);
  font-size: 14px;
}

input {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--gray-color);
  font-size: 16px;
  width: 100%;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus {
  outline: none;
  border-color: var(--dark-yellow-color);
  box-shadow: 0 0 0 3px var(--gold-glow);
}

.error {
  font-family: var(--font-ui);
  color: #ff8080;
  font-size: 14px;
  text-align: center;
}

button {
  background: var(--gold-gradient);
  color: var(--midnight-navy-color);
  padding: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  margin-top: 8px;
  box-shadow: 0 8px 20px var(--gold-glow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 26px var(--gold-glow);
}
</style>
