<script lang="ts" setup></script>

<template>
  <div class="main-header">
    <h1>Furnizori</h1>
  </div>

  <div class="container">
    <img src="../assets/images/modem.jpeg" alt="" />

    <img src="../assets/images/luminaled.jpeg" alt="" />

    <img src="../assets/images/liniah2o.jpeg" alt="" />

    <img src="../assets/images/crisor.png" alt="" />

    <img src="../assets/images/nanu.jpeg" alt="" />

    <img src="../assets/images/lider.jpeg" alt="" />

    <img src="../assets/images/supraten.jpeg" alt="" />

    <img src="../assets/images/profmet.jpeg" alt="" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  background-color: var(--deep-ocean-blue-color);
  justify-content: center;
  padding: 16px;
  gap: 16px;
}

.main-header {
  display: flex;
  color: var(--white-color);
  font-size: 24px;
  background-color: var(--deep-ocean-blue-color);
  width: 100%;
  justify-content: center;
}

img {
  width: 321px;
  height: 321px;
  border-radius: 50%;
}
</style>
