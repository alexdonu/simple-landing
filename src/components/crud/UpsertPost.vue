<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useStorage } from "../../composables/useStorage";
import { useFirestore } from "../../composables/useFirestore";

const { uploadImages, imageUrls, imageFiles, handleFileChange } =
  useStorage();
const { writeToDb, updatePost, getPostById } = useFirestore();

const props = defineProps<{
  mode: string;
  postId?: string;
}>();

const emit = defineEmits<{
  (e: "saved", id: string): void;
  (e: "cancel"): void;
}>();

const isSaving = ref(false);
const errorMessage = ref("");

const postToAdd = ref<{
  title: string;
  content: string;
  imagesUrls: string[];
}>({
  title: "",
  content: "",
  imagesUrls: [],
});

async function loadPost() {
  postToAdd.value = { title: "", content: "", imagesUrls: [] };
  imageFiles.value = [];
  imageUrls.value = [];

  if (props.mode === "update" && props.postId) {
    const existingPost = await getPostById(props.postId);
    if (existingPost) {
      postToAdd.value.title = (existingPost as any).title ?? "";
      postToAdd.value.content = (existingPost as any).content ?? "";
      postToAdd.value.imagesUrls = (existingPost as any).imagesUrls ?? [];
    }
  }
}

onMounted(loadPost);
watch(() => [props.mode, props.postId], loadPost);

function removeImage(index: number) {
  postToAdd.value.imagesUrls.splice(index, 1);
}

async function savePost() {
  isSaving.value = true;
  errorMessage.value = "";

  if (imageFiles.value.length > 0) {
    try {
      await uploadImages();
      postToAdd.value.imagesUrls = [
        ...postToAdd.value.imagesUrls,
        ...imageUrls.value,
      ];
    } catch (error) {
      console.error("Error uploading images", error);
      errorMessage.value =
        "Imaginile nu au putut fi încărcate, dar poți salva restul postării. Încearcă din nou mai târziu pentru imagini.";
    }
  }

  try {
    if (props.mode === "update" && props.postId) {
      await updatePost(props.postId, postToAdd.value);
      emit("saved", props.postId);
    } else {
      const newId = await writeToDb(postToAdd.value);
      emit("saved", newId);
    }
  } catch (error) {
    console.error("Error saving post", error);
    errorMessage.value = "Postarea nu a putut fi salvată. Încearcă din nou.";
  } finally {
    isSaving.value = false;
  }
}
</script>

<template>
  <form class="editor" @submit.prevent="savePost">
    <input
      v-model="postToAdd.title"
      type="text"
      class="title-input"
      placeholder="Titlul postării"
    />

    <textarea
      v-model="postToAdd.content"
      class="content-input"
      placeholder="Scrie conținutul postării aici..."
    ></textarea>

    <div class="images-field">
      <div class="thumbnails">
        <div
          v-for="(url, index) in postToAdd.imagesUrls"
          :key="url"
          class="thumbnail"
        >
          <img :src="url" alt="" />
          <button
            type="button"
            class="remove-thumbnail"
            aria-label="Elimină imaginea"
            @click="removeImage(index)"
          >
            ×
          </button>
        </div>

        <label class="add-images-button">
          <input type="file" multiple @change="handleFileChange" hidden />
          + Imagini
        </label>
      </div>
    </div>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

    <div class="editor-actions">
      <button type="button" class="cancel-button" @click="emit('cancel')">
        Anulează
      </button>
      <button type="submit" class="save-button" :disabled="isSaving">
        {{ isSaving ? "Se salvează..." : "Salvează" }}
      </button>
    </div>
  </form>
</template>

<style scoped>
.editor {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 28px;
  background-color: var(--deep-ocean-blue-color);
  border: 1px solid rgba(245, 204, 59, 0.15);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
}

.title-input {
  width: 100%;
  border: none;
  border-bottom: 2px solid transparent;
  background: none;
  color: var(--white-color);
  font-family: "Merriweather", serif;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 700;
  padding: 4px 0 10px;
  transition: border-color 0.2s ease;
}

.title-input::placeholder {
  color: var(--gray-color);
}

.title-input:focus {
  outline: none;
  border-bottom-color: var(--dark-yellow-color);
}

.content-input {
  width: 100%;
  min-height: 220px;
  resize: vertical;
  border: 1px solid rgba(175, 175, 182, 0.3);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.02);
  color: var(--white-color);
  font-size: 15px;
  line-height: 1.6;
  padding: 14px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.content-input::placeholder {
  color: var(--gray-color);
}

.content-input:focus {
  outline: none;
  border-color: var(--dark-yellow-color);
  box-shadow: 0 0 0 3px var(--gold-glow);
}

.thumbnails {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.thumbnail {
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 8px;
  overflow: hidden;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-thumbnail {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: rgba(15, 23, 42, 0.75);
  color: var(--white-color);
  cursor: pointer;
  line-height: 1;
  font-size: 14px;
}

.add-images-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 8px;
  border: 1px dashed rgba(175, 175, 182, 0.5);
  color: var(--gray-color);
  font-size: 13px;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.add-images-button:hover {
  border-color: var(--dark-yellow-color);
  color: var(--dark-yellow-color);
}

.error-message {
  color: #ff8080;
  font-family: var(--font-ui);
  font-size: 14px;
}

.editor-actions {
  display: flex;
  justify-content: flex-end;
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

.save-button {
  background: var(--gold-gradient);
  color: var(--midnight-navy-color);
  padding: 12px 28px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  box-shadow: 0 8px 20px var(--gold-glow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.save-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 12px 26px var(--gold-glow);
}

.save-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
