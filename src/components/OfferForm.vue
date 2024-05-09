<script setup lang="ts">
import BigYellowButton from "./BigYellowButton.vue";
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  phone: "",
});

function cleanForm(event: Event) {
  event.preventDefault();

  formData.value = {
    name: "",
    email: "",
    phone: "",
  };
}
</script>

<template>
  <div class="container is-flex-center">
    <h1 id="offer-form">Primește oferta</h1>

    <form class="is-flex-center">
      <div>
        <label for="name">Nume / Prenume</label>
        <input type="text" id="name" name="name" v-model="formData.name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="formData.email" />
      </div>

      <div>
        <label for="phone">Telefon</label>
        <input type="tel" id="phone" name="phone" v-model="formData.phone" />
      </div>

      <BigYellowButton text-content="Trimite" @click="cleanForm" />
    </form>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--deep-ocean-blue-color);
}
.is-flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: var(--white-color);
}

input {
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid var(--gray-color);
  font-size: 25px;
}

button {
  background-color: var(--dark-yellow-color);
  color: var(--white-color);
  padding: 8px 48px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 24px;
}

h1 {
  color: var(--white-color);
  font-size: 50px;
  padding: 50px 0px;
}
</style>
