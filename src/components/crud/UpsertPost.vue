<script lang="ts" setup>
import { ref, defineProps } from "vue";
import { useStorage } from "../../composables/useStorage";
import { useFirestore } from "../../composables/useFirestore";

const { uploadImages, imageUrls, handleFileChange } = useStorage();
const { writeToDb } = useFirestore();

const props = defineProps<{
  mode: string;
}>();

const postToAdd = ref<{
  title: string;
  content: string;
  imagesUrls: string[];
}>({
  title: "",
  content: "",
  imagesUrls: [],
});

async function createPost() {
  try {
    await uploadImages();
    postToAdd.value.imagesUrls = imageUrls.value;

    console.log("post to add", postToAdd.value);
    await writeToDb(postToAdd.value);
  } catch (error) {
    console.error("Error creating post", error);
  }
}
</script>

<template>
  <label for="title">Title</label>
  <input v-model="postToAdd.title" type="text" id="title" name="title" />
  <br />

  <!-- content input -->
  <label for="content">Content</label>
  <textarea v-model="postToAdd.content" id="content" name="content"></textarea>
  <br />

  <!-- image input -->
  <label for="images">Images</label>
  <input type="file" id="images" @change="handleFileChange" multiple />
  <br />

  <button @click="createPost">
    {{ props.mode === "create" ? "Create post" : "Update post" }}
  </button>
</template>
