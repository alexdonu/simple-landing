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
  padding: 0px var(--section-padding-x) var(--section-padding-x);
  gap: 40px;
}

.headers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--section-padding) 16px;
  gap: 16px;
}

.main-header {
  color: var(--white-color);
  font-size: var(--heading-size);
  text-align: center;
}

.subheader {
  color: var(--gray-color);
  font-size: var(--subheading-size);
}
</style>
