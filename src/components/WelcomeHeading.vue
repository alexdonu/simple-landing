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
          src="../assets/icons/phone-icon.svg"
          class="phone-icon"
          alt="Phone"
        />
        <p>Telefon</p>
      </div>

      <div class="messenger">
        <img src="../assets/icons/whatsapp-icon.svg" alt="WhatsApp" />
        <p>WhatsApp</p>
      </div>

      <div class="messenger">
        <img src="../assets/icons/telegram-icon.svg" alt="Telegram" />
        <p>Telegram</p>
      </div>

      <div class="messenger">
        <img src="../assets/icons/viber-icon.svg" alt="Viber" />
        <p>Viber</p>
      </div>
    </div>

    <h2><a href="tel:+37368695002">+37368695002</a></h2>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--white-color);
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
  padding: 100px 24px;
  gap: 40px;
  align-items: center;
  width: 100%;
}

.main-header {
  font-size: 50px;
  color: var(--gray-color);
  margin-bottom: 16px;
}

.subheader {
  font-size: 24px;
  color: var(--white-color);
}

.messengers {
  display: flex;
  gap: 48px;
}

.messenger {
  width: 48px;
  height: 48px;
  color: var(--white-color);
}

.phone-icon {
  background-color: var(--white-color);
  border-radius: 50%;
  height: 90%;
}

@media (min-width: 1280px) {
  .container {
    width: 50%;
  }
}
</style>
