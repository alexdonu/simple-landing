<script lang="ts" setup>
import { getAuth, signOut } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import PostsList from "../crud/PostsList.vue";
import UpsertPost from "../crud/UpsertPost.vue";
import DeletePost from "../crud/DeletePost.vue";

const router = useRouter();

async function closeSession() {
  signOut(getAuth())
    .then(() => {
      router.push({ path: "/" });
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
}

const selectedPostId = ref<string | null>(null);
const mode = ref<"create" | "update" | null>(null);
const pendingDeleteId = ref<string | null>(null);
const postsListKey = ref(0);

function startCreate() {
  mode.value = "create";
  selectedPostId.value = null;
}

function selectPost(id: string) {
  mode.value = "update";
  selectedPostId.value = id;
}

function onSaved(id: string) {
  mode.value = "update";
  selectedPostId.value = id;
  postsListKey.value += 1;
}

function cancelEdit() {
  mode.value = null;
  selectedPostId.value = null;
}

function onDeleted() {
  if (pendingDeleteId.value === selectedPostId.value) {
    cancelEdit();
  }
  pendingDeleteId.value = null;
  postsListKey.value += 1;
}
</script>

<template>
  <div class="admin-shell">
    <header class="admin-header">
      <h1>Panou de administrare</h1>
      <button class="sign-out-button" @click="closeSession">
        Deconectare
      </button>
    </header>

    <div class="admin-body">
      <PostsList
        :key="postsListKey"
        :selectedId="selectedPostId"
        @select="selectPost"
        @create="startCreate"
        @deleteRequest="pendingDeleteId = $event"
      />

      <main class="editor-pane">
        <div v-if="!mode" class="empty-state">
          <p>
            Alege o postare din listă sau apasă „Postare nouă" pentru a
            începe editarea.
          </p>
        </div>

        <UpsertPost
          v-else
          :mode="mode"
          :postId="mode === 'update' ? selectedPostId ?? undefined : undefined"
          @saved="onSaved"
          @cancel="cancelEdit"
        />
      </main>
    </div>

    <DeletePost
      v-if="pendingDeleteId"
      :postId="pendingDeleteId"
      @deleted="onDeleted"
      @cancel="pendingDeleteId = null"
    />
  </div>
</template>

<style scoped>
.admin-shell {
  min-height: 100vh;
  background-color: var(--midnight-navy-color);
  padding: clamp(16px, 4vw, 32px);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.admin-header h1 {
  color: var(--white-color);
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: clamp(1.3rem, 3vw, 1.7rem);
}

.sign-out-button {
  background-color: #d64545;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-family: var(--font-ui);
  font-weight: 600;
  font-size: 14px;
  border: none;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease;
}

.sign-out-button:hover {
  transform: translateY(-2px);
}

.admin-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
}

.editor-pane {
  width: 100%;
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  width: 100%;
  padding: 24px;
  background-color: var(--deep-ocean-blue-color);
  border: 1px dashed rgba(245, 204, 59, 0.25);
  border-radius: var(--radius);
  color: var(--gray-color);
  font-family: var(--font-ui);
  text-align: center;
}

@media (min-width: 900px) {
  .admin-body {
    display: grid;
    grid-template-columns: 320px 1fr;
  }
}
</style>
