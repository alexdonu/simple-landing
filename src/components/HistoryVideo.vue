<script lang="ts" setup></script>

<template>
  <div class="container">
    <h1 class="main-header">Istoria noastră</h1>

    <div class="store-video">
      <video controls>
        <source src="../assets/videos/historyVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--midnight-indigo-color);
  padding: 16px;
}

.main-header {
  color: var(--white-color);
  font-size: 24px;
  text-align: center;
}

.store-video video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
