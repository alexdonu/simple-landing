<script setup lang="ts">
const props = defineProps<{
  textContent: string;
  disabled?: boolean;
}>();
</script>

<template>
  <button class="big-yellow-button" :disabled="props.disabled">
    {{ props.textContent }}
  </button>
</template>

<style scoped>
.big-yellow-button {
  display: flex;
  justify-content: center;
  background: var(--gold-gradient);
  color: var(--midnight-navy-color);
  width: 100%;
  max-width: 360px;
  padding: 16px 32px;
  border-radius: var(--radius);
  font-family: var(--font-ui);
  font-weight: 600;
  font-size: clamp(1.05rem, 3vw, 1.35rem);
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 20px var(--gold-glow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.big-yellow-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 28px var(--gold-glow);
}

.big-yellow-button:active {
  transform: translateY(-1px);
}

.big-yellow-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}
</style>
