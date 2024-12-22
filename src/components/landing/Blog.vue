<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1>Blog</h1>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: var(--light-midnight-navy-color);
  padding: 100px 48px;
  justify-content: center;
  width: 100%;
  color: white;
  text-align: center;
}

.rounded-image {
  border-radius: 50%;
  width: 300px;
  height: 300px;
}

@media (min-width: 1280px) {
  .rounded-image {
    width: 545px;
    height: 545px;
  }
}
</style>
