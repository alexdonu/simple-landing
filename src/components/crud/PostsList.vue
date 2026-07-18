<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useFirestore } from "../../composables/useFirestore";

const { getCollectionDocs } = useFirestore();

interface PostDataWithId {
  id: string;
  title: string;
  content: string;
  imagesUrls: string[];
}

const props = defineProps<{
  selectedId?: string | null;
}>();

const emit = defineEmits<{
  (e: "select", id: string): void;
  (e: "create"): void;
  (e: "deleteRequest", id: string): void;
}>();

const posts = ref<PostDataWithId[] | undefined>(undefined);

onMounted(async () => {
  posts.value = await getCollectionDocs();
});

function requestDelete(event: Event, id: string) {
  event.stopPropagation();
  emit("deleteRequest", id);
}
</script>

<template>
  <aside class="sidebar">
    <button class="new-post-button" type="button" @click="emit('create')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M5 12h14" stroke-linecap="round" />
      </svg>
      Postare nouă
    </button>

    <div class="posts">
      <p v-if="posts && posts.length === 0" class="empty">
        Nicio postare încă.
      </p>

      <button
        v-for="post in posts"
        :key="post.id"
        type="button"
        class="post-row"
        :class="{ active: post.id === props.selectedId }"
        @click="emit('select', post.id)"
      >
        <span class="post-title">{{ post.title || "Fără titlu" }}</span>

        <span
          class="delete-icon"
          role="button"
          aria-label="Șterge postarea"
          @click="requestDelete($event, post.id)"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path
              d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l1-12"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 20px;
  background-color: var(--deep-ocean-blue-color);
  border-radius: var(--radius);
  border: 1px solid rgba(245, 204, 59, 0.12);
}

.new-post-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  background: var(--gold-gradient);
  color: var(--midnight-navy-color);
  border: none;
  border-radius: 10px;
  font-family: var(--font-ui);
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 8px 20px var(--gold-glow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.new-post-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 26px var(--gold-glow);
}

.new-post-button svg {
  width: 18px;
  height: 18px;
}

.posts {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 460px;
  overflow-y: auto;
}

.empty {
  font-family: var(--font-ui);
  color: var(--gray-color);
  font-size: 14px;
  text-align: center;
  padding: 16px 0;
}

.post-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 12px 14px;
  background: none;
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.post-row:hover {
  background-color: rgba(245, 204, 59, 0.06);
}

.post-row.active {
  background-color: rgba(245, 204, 59, 0.12);
  border-color: rgba(245, 204, 59, 0.35);
}

.post-title {
  font-family: var(--font-ui);
  color: var(--white-color);
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.delete-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  color: var(--gray-color);
  opacity: 0.6;
  transition: opacity 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.delete-icon:hover {
  opacity: 1;
  background-color: rgba(214, 69, 69, 0.15);
  color: #e77;
}

.delete-icon svg {
  width: 16px;
  height: 16px;
}
</style>
