<script setup lang="ts"></script>

<template>
  <div class="container">
    <img
      src="../../assets/images/coffee_rect.png"
      alt="a picture focused on cup of coffee and some deposit on background"
      class="rounded-image"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  background-color: var(--midnight-navy-color);
  padding: 100px 48px;
  justify-content: center;
  width: 100%;
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

  .container {
    width: 50%;
  }
}
</style>
