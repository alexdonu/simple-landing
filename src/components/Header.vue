<script lang="ts" setup>
import WelcomeHeading from "./WelcomeHeading.vue";
import WelcomeImage from "./WelcomeImage.vue";
import Menu from "./Menu.vue";
</script>

<template>
  <div class="header-container">
    <div class="menu">
      <Menu />
    </div>
    <WelcomeHeading />
    <WelcomeImage />
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.menu {
  position: absolute;
  width: 100%;
  top: 10px;
  padding: 0px 10px;
}
</style>
