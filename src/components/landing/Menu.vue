<script setup lang="ts">
import LrssLogo from "../../assets/LrssLogo.vue";
</script>

<template>
  <div class="menu-container">
    <div class="left-side-container">
      <a href="#about-us">Despre noi</a>
      <a href="#offer">Oferte</a>
      <a href="#faq">Întrebari</a>
    </div>

    <div>
      <LrssLogo :width="203" :height="39" />
    </div>

    <div class="right-side-container">
      <a href="#our-history">Istoria noastră</a>
      <a href="#phone-number">Contactează-ne</a>
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--gray-color);
  color: var(--deep-ocean-blue-color);
  font-size: 14px;
  border-radius: 24px;
  width: 100%;
}

.left-side-container {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  padding: 0px 16px 0px;
}

.right-side-container {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  padding: 0px 16px 0px;
}

@media (min-width: 675px) {
  .menu-container {
    border-radius: 64px;
    padding: 0px 8px 0px;
  }
}

@media (max-width: 500px) {
  .menu-container {
    flex-direction: column;
  }
}

a {
  color: #333;
  font-size: medium;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #555;
  cursor: pointer;
}
</style>
