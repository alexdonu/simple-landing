<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import LrssLogo from "../../assets/LrssLogo.vue";

const isOpen = ref(false);
const isScrolled = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}

function handleScroll() {
  isScrolled.value = window.scrollY > 16;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="menu-container">
    <div class="menu-bar" :class="{ scrolled: isScrolled }">
      <div class="logo">
        <LrssLogo :width="180" :height="35" />
      </div>

      <button
        class="hamburger"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Deschide meniul"
        @click="toggleMenu"
      >
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </button>

      <nav class="links" :class="{ open: isOpen }" @click="closeMenu">
        <a href="#about-us">Despre noi</a>
        <a href="#offer">Oferte</a>
        <a href="#faq">Întrebari</a>
        <a href="#our-history">Istoria noastră</a>
        <a href="#phone-number">Contactează-ne</a>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
}

.menu-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(175, 175, 182, 0.92);
  backdrop-filter: blur(10px);
  color: var(--deep-ocean-blue-color);
  font-size: 14px;
  border-radius: 24px;
  width: 100%;
  padding: 8px 16px;
  transition: box-shadow 0.25s ease, border-radius 0.25s ease, background-color 0.25s ease;
}

.menu-bar.scrolled {
  box-shadow: var(--shadow-sm);
  background-color: rgba(175, 175, 182, 0.98);
}

.logo {
  display: flex;
  align-items: center;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: var(--deep-ocean-blue-color);
  border-radius: 2px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.hamburger span.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.links {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background-color: rgba(175, 175, 182, 0.98);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 16px;
  box-shadow: var(--shadow-lg);
  z-index: 20;
}

.links.open {
  display: flex;
}

a {
  font-family: var(--font-ui);
  font-weight: 500;
  color: #333;
  font-size: 15px;
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

a:hover {
  color: var(--midnight-navy-color);
  border-bottom-color: var(--dark-yellow-color);
  cursor: pointer;
}

@media (min-width: 768px) {
  .menu-bar {
    border-radius: 64px;
    padding: 10px 24px;
  }

  .hamburger {
    display: none;
  }

  .links {
    display: flex;
    flex-direction: row;
    gap: 26px;
    position: static;
    background-color: transparent;
    backdrop-filter: none;
    box-shadow: none;
    padding: 0;
  }
}
</style>
