<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useFirestore } from "../../composables/useFirestore";

interface PostDataWithId {
  id: string;
  title: string;
  content: string;
  imagesUrls: string[];
  published?: boolean;
}

const { getPublishedPosts } = useFirestore();

const posts = ref<PostDataWithId[] | undefined>(undefined);

onMounted(async () => {
  posts.value = await getPublishedPosts();
});

function excerpt(text: string, maxLength = 160) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
</script>

<template>
  <div class="container">
    <h1 class="main-header">Blog</h1>

    <p v-if="posts && posts.length === 0" class="empty">
      În curând, primele noastre postări!
    </p>

    <div v-else class="posts-grid">
      <article v-for="post in posts" :key="post.id" class="post-card">
        <div v-if="post.imagesUrls?.length" class="post-image">
          <img :src="post.imagesUrls[0]" alt="" />
        </div>

        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-excerpt">{{ excerpt(post.content) }}</p>
      </article>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--light-midnight-navy-color);
  padding: var(--section-padding) var(--section-padding-x);
  width: 100%;
  gap: 40px;
}

.main-header {
  color: var(--white-color);
  font-size: var(--heading-size);
  text-align: center;
}

.empty {
  font-family: var(--font-ui);
  color: var(--gray-color);
  font-size: 16px;
  text-align: center;
}

.posts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
  max-width: 1000px;
}

.post-card {
  display: flex;
  flex-direction: column;
  background-color: var(--deep-ocean-blue-color);
  border: 1px solid rgba(245, 204, 59, 0.12);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.post-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(245, 204, 59, 0.4);
}

.post-image {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-title {
  color: var(--white-color);
  font-size: 1.3rem;
  padding: 20px 20px 0;
}

.post-excerpt {
  color: var(--gray-color);
  font-family: var(--font-ui);
  font-size: 15px;
  line-height: 1.6;
  padding: 8px 20px 20px;
}

@media (min-width: 700px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .posts-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
