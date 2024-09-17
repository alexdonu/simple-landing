<script setup lang="ts">
import DreamQuote from "../landing/DreamQuote.vue";
import OurOffers from "../landing/OurOffers.vue";
import OfferForm from "../landing/OfferForm.vue";
import WhyUs from "../landing/WhyUs.vue";
import FAQ from "../landing/FAQ.vue";
import HistoryVideo from "../landing/HistoryVideo.vue";
import Providers from "../landing/Providers.vue";
import Footer from "../landing/Footer.vue";
import Header from "../landing/Header.vue";
import Blog from "../landing/Blog.vue";
</script>

<template>
  <div class="app-container">
    <div class="components-container">
      <Header />
      <Blog />
      <DreamQuote />
      <OurOffers />
      <WhyUs />
      <FAQ />
      <HistoryVideo />
      <OfferForm />
      <Providers />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: center;
}

.components-container {
  width: 1280px;
}

@media (max-width: 1280px) {
  .components-container {
    width: 100%;
  }
}
</style>
