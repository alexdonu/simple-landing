<script setup lang="ts">
import DreamQuote from "./components/DreamQuote.vue";
import OurOffers from "./components/OurOffers.vue";
import OfferForm from "./components/OfferForm.vue";
import WhyUs from "./components/WhyUs.vue";
import FAQ from "./components/FAQ.vue";
import HistoryVideo from "./components/HistoryVideo.vue";
import Providers from "./components/Providers.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div class="app-container">
    <div class="components-container">
      <Header />
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
