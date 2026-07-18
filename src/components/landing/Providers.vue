<script lang="ts" setup></script>

<template>
  <hr />
  <div class="main-header-container">
    <h1 class="main-header">Furnizori</h1>
  </div>

  <div class="container">
    <img src="../../assets/images/modem.jpeg" alt="" />

    <img src="../../assets/images/luminaled.jpeg" alt="" />

    <img src="../../assets/images/liniah2o.jpeg" alt="" />

    <img src="../../assets/images/crisor_rect.png" alt="" />

    <img src="../../assets/images/nanu.jpeg" alt="" />

    <img src="../../assets/images/lider.jpeg" alt="" />

    <img src="../../assets/images/supraten.jpeg" alt="" />

    <img src="../../assets/images/profmet.jpeg" alt="" />
  </div>
</template>

<style scoped>
hr {
  border: none;
  height: 2px;
  width: 100%;
  background: var(--gold-gradient);
  opacity: 0.35;
}

.container {
  display: flex;
  flex-wrap: wrap;
  background-color: var(--deep-ocean-blue-color);
  justify-content: center;
  padding: 16px 16px var(--section-padding);
  gap: 16px;
}

.main-header-container {
  display: flex;
  color: var(--white-color);
  background-color: var(--deep-ocean-blue-color);
  width: 100%;
  justify-content: center;
  padding-top: var(--section-padding);
  padding-bottom: 8px;
}

.main-header {
  font-size: var(--heading-size);
}

img {
  width: clamp(90px, 20vw, 250px);
  height: clamp(90px, 20vw, 250px);
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(1) opacity(0.65);
  transition: filter 0.3s ease, transform 0.3s ease;
}

img:hover {
  filter: grayscale(0) opacity(1);
  transform: scale(1.06);
}
</style>
