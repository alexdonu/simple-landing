<script lang="ts" setup>
const props = defineProps<{
  mode: String;
  postId: String;
}>();
</script>

<template>
  <h1>{{ props.mode }} component</h1>
</template>
