<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="logo">
      <img src="../../assets/images/lrss_log.png" alt="shop logo" />
    </div>

    <div class="social-medias">
      <a href="https://www.facebook.com/LaRomanSvetlanaSrl" target="_blank">
        <img
          class="social-logo"
          src="../../assets/images/facebook.svg"
          alt="Facebook"
        />
      </a>
      <a href="https://www.instagram.com/laroman.svetlana/" target="_blank">
        <img
          class="social-logo"
          src="../../assets/images/instagram.svg"
          alt="Instagram"
        />
      </a>
      <a href="https://www.tiktok.com/@laroman.svetlana" target="_blank">
        <img
          class="social-logo"
          src="../../assets/images/tiktok.svg"
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
  border-top: 3px solid transparent;
  border-image: var(--gold-gradient) 1;
}

.logo {
  width: 100%;
  max-width: 220px;
}

.logo img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.social-medias {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.social-logo {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.social-logo:hover {
  transform: scale(1.1) translateY(-2px);
  box-shadow: 0 8px 20px var(--gold-glow);
}

.all-rights-reserved {
  font-family: var(--font-ui);
  margin-top: 16px;
  font-size: 14px;
  color: var(--midnight-navy-color);
}
</style>
