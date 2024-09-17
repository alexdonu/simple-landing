<script lang="ts" setup>
import { ref, watch } from "vue";

const selectedPost = ref("");

const emit = defineEmits<{
  (e: "change", id: string): void;
}>();

watch(selectedPost, (newValue) => {
  emit("change", newValue);
});
</script>

<template>
  <label for="post-select">Here are your posts: </label>

  <select v-model="selectedPost" name="posts" id="post-select">
    <option value="default">--Please choose one--</option>

    <option v-for="x in 5" :key="x" :value="x">{{ x }}</option>
  </select>
</template>
