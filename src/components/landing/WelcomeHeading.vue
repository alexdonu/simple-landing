<script setup lang="ts">
import BigYellowButton from "./BigYellowButton.vue";
</script>

<template>
  <div class="container">
    <div class="headers">
      <h1 class="main-header">
        Pasul tău următor în construcție, începe aici!
      </h1>

      <h3 class="subheader">
        Materiale de construcție de calitate pentru orice necesitate!
      </h3>
    </div>

    <a href="tel:+37368695002">
      <BigYellowButton id="phone-number" text-content="Contactează-ne" />
    </a>

    <div class="messengers">
      <div class="messenger">
        <img
          src="../../assets/icons/phone-icon.svg"
          class="phone-icon"
          alt="Phone"
        />
        <p>Telefon</p>
      </div>

      <div class="messenger">
        <img src="../../assets/icons/whatsapp-icon.svg" alt="WhatsApp" />
        <p>WhatsApp</p>
      </div>

      <div class="messenger">
        <img src="../../assets/icons/telegram-icon.svg" alt="Telegram" />
        <p>Telegram</p>
      </div>

      <div class="messenger">
        <img src="../../assets/icons/viber-icon.svg" alt="Viber" />
        <p>Viber</p>
      </div>
    </div>

    <h2 class="phone-number"><a href="tel:+37368695002">+37368695002</a></h2>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--white-color);
}

.phone-number {
  font-family: var(--font-ui);
  font-weight: 600;
  font-size: clamp(1.2rem, 4vw, 1.75rem);
  letter-spacing: 0.02em;
}

.phone-number a:hover {
  color: var(--dark-yellow-color);
}

.headers {
  padding-bottom: 50px;
}
.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  text-overflow: ellipsis;
  background-color: var(--midnight-indigo-color);
  padding: var(--section-padding) var(--section-padding-x);
  gap: 40px;
  align-items: center;
  width: 100%;
}

.main-header {
  font-size: var(--heading-size);
  color: var(--gray-color);
  margin-bottom: 16px;
}

.subheader {
  font-size: var(--subheading-size);
  color: var(--white-color);
  max-width: 560px;
}

.messengers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(16px, 5vw, 48px);
}

.messenger {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 76px;
  color: var(--white-color);
}

.messenger p {
  font-family: var(--font-ui);
  font-size: 14px;
  white-space: nowrap;
}

.messenger img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.phone-icon {
  background-color: var(--white-color);
  border-radius: 50%;
}

@media (min-width: 1280px) {
  .container {
    width: 50%;
  }
}
</style>
