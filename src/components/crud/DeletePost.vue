<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useFirestore } from "../../composables/useFirestore";

const props = defineProps<{
  postId: string;
}>();

const emit = defineEmits<{
  (e: "deleted"): void;
  (e: "cancel"): void;
}>();

const { getPostById, deletePost } = useFirestore();

const postTitle = ref("");
const isDeleting = ref(false);

onMounted(async () => {
  const post = await getPostById(props.postId);
  postTitle.value = (post as any)?.title || "această postare";
});

async function confirmDelete() {
  isDeleting.value = true;
  try {
    await deletePost(props.postId);
    emit("deleted");
  } catch (error) {
    console.error("Error deleting post", error);
  } finally {
    isDeleting.value = false;
  }
}
</script>

<template>
  <div class="overlay" @click.self="emit('cancel')">
    <div class="dialog">
      <p>
        Sigur vrei să ștergi <strong>{{ postTitle }}</strong
        >? Această acțiune este ireversibilă.
      </p>

      <div class="dialog-actions">
        <button type="button" class="cancel-button" @click="emit('cancel')">
          Anulează
        </button>
        <button
          type="button"
          class="delete-button"
          :disabled="isDeleting"
          @click="confirmDelete"
        >
          {{ isDeleting ? "Se șterge..." : "Șterge" }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 100;
}

.dialog {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  padding: 28px;
  background-color: var(--deep-ocean-blue-color);
  color: var(--white-color);
  border: 1px solid rgba(214, 69, 69, 0.25);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  text-align: center;
  font-family: var(--font-ui);
}

.dialog-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.cancel-button {
  background: none;
  color: var(--gray-color);
  border: 1px solid rgba(175, 175, 182, 0.4);
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.cancel-button:hover {
  border-color: var(--gray-color);
  color: var(--white-color);
}

.delete-button {
  background-color: #d64545;
  color: var(--white-color);
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  box-shadow: 0 8px 20px rgba(214, 69, 69, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.delete-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 12px 26px rgba(214, 69, 69, 0.4);
}

.delete-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
