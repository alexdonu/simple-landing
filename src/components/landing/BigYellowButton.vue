<script setup lang="ts">
const props = defineProps<{
  textContent: string;
}>();
</script>

<template>
  <button class="big-yellow-button">{{ props.textContent }}</button>
</template>

<style scoped>
.big-yellow-button {
  display: flex;
  justify-content: center;
  background-color: var(--dark-yellow-color);
  color: var(--white-color);
  width: 360px;
  padding: 16px 48px;
  border-radius: 4px;
  font-size: 24px;
}
</style>
