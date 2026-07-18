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
  padding: var(--section-padding) var(--section-padding-x);
  justify-content: center;
  width: 100%;
}

.rounded-image {
  border-radius: 50%;
  width: clamp(200px, 40vw, 545px);
  height: clamp(200px, 40vw, 545px);
  object-fit: cover;
  border: 3px solid rgba(245, 204, 59, 0.3);
  box-shadow:
    0 0 0 10px rgba(245, 204, 59, 0.08),
    0 0 90px 10px rgba(245, 204, 59, 0.14),
    0 30px 60px -15px rgba(0, 0, 0, 0.6);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.rounded-image:hover {
  transform: scale(1.02);
  box-shadow:
    0 0 0 10px rgba(245, 204, 59, 0.12),
    0 0 110px 14px rgba(245, 204, 59, 0.2),
    0 30px 60px -15px rgba(0, 0, 0, 0.6);
}

@media (min-width: 1280px) {
  .container {
    width: 50%;
  }
}
</style>
