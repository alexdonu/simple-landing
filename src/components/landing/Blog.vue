<script setup lang="ts">
import { onMounted, ref } from "vue";
import PostView from "./PostView.vue";
import type { PostDataWithId } from "./types/types";
import { useFirestore } from "../../composables/useFirestore";

const { getCollectionDocs } = useFirestore();
const posts = ref<PostDataWithId[]>([]);

onMounted(async () => {
  try {
    posts.value = (await getCollectionDocs()) ?? [];
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="container">
    <h1>Blogg</h1>

    <PostView v-for="post in posts" :post="post" :key="post.id" />
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
