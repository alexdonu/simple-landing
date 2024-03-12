<script lang="ts" setup>
import BigYellowButton from "./BigYellowButton.vue";
</script>

<template>
  <div class="container">
    <div class="headers">
      <h1 class="main-header">Descoperă ofertele noastre!</h1>

      <h3 class="subheader">Ofertă exclusiv pentru tine.</h3>
    </div>

    <BigYellowButton text-content="Primește oferta!" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: var(--midnight-indigo-color);
  width: 100%;
  padding: 64px 16px;
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
  font-size: 24px;
}

.subheader {
  color: var(--gray-color);
  font-size: 16px;
}
</style>
