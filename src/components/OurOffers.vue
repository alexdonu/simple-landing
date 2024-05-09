<script lang="ts" setup>
import BigYellowButton from "./BigYellowButton.vue";

function redirectToOfferForm() {
  document.location.href = "#offer-form";
}
</script>

<template>
  <div class="container">
    <div class="headers">
      <h1 class="main-header" id="offer">Descoperă ofertele noastre!</h1>

      <h3 class="subheader">Ofertă exclusiv pentru tine.</h3>
    </div>

    <div class="is-flex-center">
      <BigYellowButton
        text-content="Primește oferta!"
        @click="redirectToOfferForm"
      />
    </div>
  </div>
</template>

<style scoped>
.is-flex-center {
  display: flex;
  justify-content: center;
}
.container {
  display: flex;
  flex-direction: column;
  background-color: var(--midnight-indigo-color);
  width: 100%;
  padding: 0px 16px;
  gap: 40px;
}

.headers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 16px;
  gap: 16px;
}

.main-header {
  color: var(--white-color);
  font-size: 50px;
}

.subheader {
  color: var(--gray-color);
  font-size: 24px;
}
</style>
