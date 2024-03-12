<script lang="ts" setup>
import WelcomeHeading from "./WelcomeHeading.vue";
import WelcomeImage from "./WelcomeImage.vue";
</script>

<template>
  <div class="header-container">
    <WelcomeHeading />
    <WelcomeImage />
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
