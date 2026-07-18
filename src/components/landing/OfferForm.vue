<script setup lang="ts">
import BigYellowButton from "./BigYellowButton.vue";
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_nljdc9m";
const EMAILJS_TEMPLATE_ID = "template_369tryi";
const EMAILJS_PUBLIC_KEY = "5Bg3QT9KoGXXJ6XOs";

const formData = ref({
  name: "",
  email: "",
  phone: "",
});

const isSending = ref(false);
const feedback = ref<{ type: "success" | "error"; message: string } | null>(
  null
);

async function sendOffer(event: Event) {
  event.preventDefault();
  isSending.value = true;
  feedback.value = null;

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.value.name,
        from_email: formData.value.email,
        phone: formData.value.phone,
      },
      { publicKey: EMAILJS_PUBLIC_KEY }
    );

    feedback.value = {
      type: "success",
      message: "Cererea a fost trimisă! Te vom contacta în curând.",
    };
    formData.value = { name: "", email: "", phone: "" };
  } catch (error) {
    console.error("Error sending offer request", error);
    feedback.value = {
      type: "error",
      message:
        "A apărut o eroare la trimitere. Te rugăm să încerci din nou sau să ne contactezi direct.",
    };
  } finally {
    isSending.value = false;
  }
}
</script>

<template>
  <div class="container">
    <h1 id="offer-form">Primește oferta</h1>

    <form class="is-flex-center" @submit="sendOffer">
      <div>
        <label for="name">Nume / Prenume</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="formData.name"
          required
        />
      </div>
      <div>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="formData.email"
          required
        />
      </div>

      <div>
        <label for="phone">Telefon</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          v-model="formData.phone"
          required
        />
      </div>

      <p
        v-if="feedback"
        class="feedback"
        :class="feedback.type"
      >
        {{ feedback.message }}
      </p>

      <BigYellowButton
        :text-content="isSending ? 'Se trimite...' : 'Trimite'"
        :disabled="isSending"
      />
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--deep-ocean-blue-color);
  padding: 0 var(--section-padding-x);
}
.is-flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding-bottom: 50px;
}

form {
  width: 100%;
}

form > div {
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 8px;
  color: var(--white-color);
}

input {
  width: 100%;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid var(--gray-color);
  font-size: clamp(1rem, 3vw, 1.3rem);
}

.feedback {
  width: 100%;
  margin-bottom: 16px;
  font-family: var(--font-ui);
  font-size: 15px;
  text-align: center;
}

.feedback.success {
  color: #7fd88f;
}

.feedback.error {
  color: #ff8080;
}

button {
  background-color: var(--dark-yellow-color);
  color: var(--white-color);
  padding: 8px 48px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  margin-top: 8px;
}

h1 {
  color: var(--white-color);
  font-size: var(--heading-size);
  padding: var(--section-padding) 0px;
  text-align: center;
}
</style>
