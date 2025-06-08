<script setup lang="ts">
import { PostDataWithId } from "./types/types";

const props = defineProps<{
  post: PostDataWithId;
}>();
</script>

<template>
  <div class="post-container">
    <h2>
      {{ props.post.title }}
    </h2>

    <p>
      {{ props.post.content }}
    </p>

    <img
      v-for="imageUrl in props.post.imagesUrls"
      :src="imageUrl"
      alt="Post image"
    />
  </div>
</template>

<style scoped>
.post-container {
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin: 24px;
  border-radius: 8px;
  color: white;
  text-align: center;
}
</style>
