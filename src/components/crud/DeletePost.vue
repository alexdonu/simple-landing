<script lang="ts" setup>
const props = defineProps<{
  postId: String;
}>();
</script>
<template>
  <h1>You are going to delete {{ props.postId }}</h1>
</template>
