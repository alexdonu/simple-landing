<script lang="ts" setup>
import { useFirestore } from "../../composables/useFirestore";

const { deletePost } = useFirestore();

const props = defineProps<{
  postId: string;
}>();
</script>

<template>
  <button @click="deletePost(props.postId)">Delete post</button>
</template>
