<script setup lang="ts">
import LrssLogo from "../assets/LrssLogo.vue";
</script>

<template>
  <div class="menu-container">
    <div class="left-side-container">
      <div>Despre noi</div>
      <div>Oferte</div>
      <div>Intrebari frecvente</div>
    </div>

    <div>
      <LrssLogo :width="203" :height="39" />
    </div>

    <div class="right-side-container">
      <div>Istoria noastra</div>
      <div>Contacteaza-ne</div>
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
  width: 1264px;
  border-radius: 24px;
}

.left-side-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0px 16px 0px;
}

.right-side-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0px 16px 0px;
}

@media (min-width: 675px) {
  .menu-container {
    border-radius: 64px;
  }
}
</style>
