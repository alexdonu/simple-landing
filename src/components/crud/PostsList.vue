<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useFirestore } from "../../composables/useFirestore";

// const dataExample = {
//   title: "Alexander",
//   content: "Doe",
//   imagesUrls: ["https://example.com", "https://example.com"],
// };

const { getCollectionDocs } = useFirestore();

// on component create

interface PostDataWithId {
  id: string;
  title: string;
  content: string;
  imagesUrls: string[];
}

const posts = ref<PostDataWithId[] | undefined>(undefined);

// async function write() {
//   await writeToDb(dataExample);
// }

onMounted(async () => {
  posts.value = await getCollectionDocs();
});
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

    <option v-for="post in posts" :key="post.id" :value="post.id">
      {{ post.title }}
    </option>
  </select>
</template>
