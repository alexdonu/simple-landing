<script lang="ts" setup>
import { getAuth, signOut } from "firebase/auth";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import PostsList from "../crud/PostsList.vue";
import UpsertPost from "../crud/UpsertPost.vue";

const router = useRouter();
const actionToPerform = ref<string>("");

async function closeSession() {
  signOut(getAuth())
    .then(() => {
      console.log("User signed out");
      router.push({ path: "/" });
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
}

const selectedPost = ref("");

function getSelectedPost(id: string) {
  selectedPost.value = id;
}

const getActionToPerformMessage = computed(() => {
  if (selectedPost.value === "default" && actionToPerform.value === "create") {
    return "You want to create a new post";
  }

  if (
    selectedPost.value !== "default" &&
    (actionToPerform.value === "update" || actionToPerform.value === "delete")
  ) {
    return `You want to ${actionToPerform.value} the post ${selectedPost.value}`;
  }

  return "I can't determine the action you want to perform. Please select something from the list and touch one of radio buttons";
});
</script>

<template>
  <div class="sign-out-button-container">
    <button class="sign-out-button" @click="closeSession">
      Close your session pushing this button
    </button>
  </div>

  <div class="posts-list">
    <PostsList @change="getSelectedPost" />
  </div>

  <div class="actions-container">
    <h2>Choose an action you want</h2>

    <div class="radio-group">
      <div v-if="selectedPost === 'default'">
        <input
          v-model="actionToPerform"
          type="radio"
          id="create"
          name="action"
          value="create"
        />
        <label for="create">Create</label>
      </div>

      <div v-if="selectedPost !== 'default'">
        <input
          v-model="actionToPerform"
          type="radio"
          id="update"
          name="action"
          value="update"
        />
        <label for="update">Update</label>
      </div>

      <div v-if="selectedPost !== 'default'">
        <input
          v-model="actionToPerform"
          type="radio"
          id="delete"
          name="action"
          value="delete"
        />
        <label for="delete">Delete</label>
      </div>
    </div>
  </div>

  <h1>
    {{ getActionToPerformMessage }}

    <div v-if="getActionToPerformMessage === 'You want to create a new post'">
      <UpsertPost mode="create" />
    </div>
  </h1>
</template>

<style lang="css" scoped>
.sign-out-button {
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: large;
}

.sign-out-button-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.actions-container {
  display: flex;
  flex-direction: column;
}

.radio-group {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

h2,
h1 {
  text-align: center;
}

.posts-list {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
</style>
