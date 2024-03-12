<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/images/lrss_log.png" alt="shop logo" />
    </div>

    <div class="social-medias">
      <a href="https://www.facebook.com/">
        <img
          class="social-logo"
          src="../assets/images/facebook.svg"
          alt="Facebook"
        />
      </a>
      <a href="https://www.instagram.com/">
        <img
          class="social-logo"
          src="../assets/images/instagram.svg"
          alt="Instagram"
        />
      </a>
      <a href="https://www.tiktok.com/">
        <img
          class="social-logo"
          src="../assets/images/tiktok.svg"
          alt="TikTok"
        />
      </a>
    </div>

    <p class="all-rights-reserved">&copy; 2024 All rights reserved</p>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--gray-color);
  padding: 48px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.social-medias {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.social-logo {
  width: 32px;
  height: 32px;
  object-fit: cover;
}

.all-rights-reserved {
  margin-top: 16px;
  font-size: 14px;
}
</style>
