<script setup lang="ts">
import DreamQuote from "./components/DreamQuote.vue";
import OurOffers from "./components/OurOffers.vue";
import WhyUs from "./components/WhyUs.vue";
import FAQ from "./components/FAQ.vue";
import HistoryVideo from "./components/HistoryVideo.vue";
import Providers from "./components/Providers.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <DreamQuote />
  <OurOffers />
  <WhyUs />
  <FAQ />
  <HistoryVideo />
  <Providers />
  <Footer />
</template>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  background-color: black;
  width: 100%;
}
</style>
