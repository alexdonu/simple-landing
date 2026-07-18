<script lang="ts" setup></script>

<template>
  <div class="container">
    <h1 class="main-header" id="our-history">Istoria noastră</h1>

    <div class="store-video">
      <video controls>
        <source src="../../assets/videos/historyVideo.mp4" type="video/mp4" />
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
  padding: var(--section-padding) var(--section-padding-x) var(--section-padding-x);
  border-top: 2px solid transparent;
  border-image: linear-gradient(90deg, transparent, rgba(245, 204, 59, 0.45), transparent) 1;
}

.main-header {
  color: var(--white-color);
  font-size: var(--heading-size);
  text-align: center;
  margin-bottom: 24px;
}

.store-video {
  width: 100%;
  max-width: 800px;
}

.store-video video {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: var(--shadow-lg);
}
</style>
