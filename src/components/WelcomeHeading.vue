<script setup lang="ts">
import BigYellowButton from "./BigYellowButton.vue";
</script>

<template>
  <div class="container">
    <div class="headers">
      <h1 class="main-header">
        Pasul tău următor în construcție, începe aici!
      </h1>

      <h3 class="subheader">
        Materiale de construcție de calitate pentru orice necesitate!
      </h3>
    </div>

    <BigYellowButton text-content="Contacteaza-ne" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  text-overflow: ellipsis;
  background-color: var(--midnight-indigo-color);
  padding: 245px 24px;
  gap: 40px;
  align-items: center;
  width: 100%;
}

.main-header {
  font-size: 30px;
  color: var(--gray-color);
  margin-bottom: 16px;
}

.subheader {
  font-size: 16px;
  color: var(--white-color);
}

@media (min-width: 1280px) {
  .container {
    width: 50%;
  }
}
</style>
