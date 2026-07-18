<script lang="ts" setup>
import { ref } from "vue";

const faqs = [
  {
    question: "Cum pot comanda materiale de construcție?",
    answer:
      "Pentru a comanda, vă invităm să ne contactați direct apăsând pe butonul Contactează-ne. Echipa noastră de consultanți este pregătită să vă ghideze în alegerea celor mai potrivite materiale pentru proiectul dvs. și să vă ofere toate detaliile necesare pentru finalizarea comenzii.",
  },
  {
    question: "Oferiți consultanță pentru alegerea materialelor?",
    answer:
      "Da, oferim consultanță personalizată online. Echipa noastră de experți este la dispoziția dumneavoastră pentru a răspunde întrebărilor și pentru a vă ajuta să alegeți materialele cele mai potrivite pentru nevoile proiectului dvs.",
  },
  {
    question: "Care este termenul de livrare?",
    answer:
      "Termenul de livrare variază în funcție de disponibilitatea produselor și de locația de livrare. În mod obișnuit, livrăm în termen de 1-3 zile lucrătoare. Pentru detalii în privința prețului de livrare pentru oraș/sat/regiunea dumneavoastră vă rugăm să ne contactați.",
  },
  {
    question: "Există o comandă minimă pentru livrare?",
    answer:
      "Nu impunem o valoare minimă pentru comenzi, însă costurile de livrare pot varia în funcție de dimensiunea și greutatea totală a comenzii. Pentru detalii precise, vă invităm să discutați cu unul dintre consultanții noștri.",
  },
  {
    question:
      "Ce se întâmplă dacă produsul primit nu corespunde cu ceea ce am comandat?",
    answer:
      "Dacă întâmpinați orice discrepanțe între comanda plasată și produsul primit, vă rugăm să ne contactați imediat. Echipa noastră va investiga situația și va lua măsurile necesare pentru a o rezolva cât mai rapid posibil.",
  },
  {
    question: "Pot returna produsele dacă nu sunt mulțumit?",
    answer:
      "Acceptăm returnarea produselor în termen de 14 zile de la livrare, cu condiția ca acestea să fie în starea originală și să nu fi fost utilizate. Pentru mai multe detalii despre procesul de returnare, vă rugăm să ne contactați.",
  },
];

const openIndex = ref<number | null>(0);

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<template>
  <div class="container">
    <h1 class="main-header" id="faq">Întrebări frecvente</h1>

    <div class="faq-list">
      <div
        v-for="(faq, index) in faqs"
        :key="faq.question"
        class="faq-item"
        :class="{ open: openIndex === index }"
      >
        <button
          class="faq-question"
          type="button"
          :aria-expanded="openIndex === index"
          @click="toggle(index)"
        >
          <span>{{ faq.question }}</span>
          <span class="faq-icon" aria-hidden="true"></span>
        </button>

        <div class="faq-answer">
          <div class="faq-answer-inner">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: var(--deep-ocean-blue-color);
  width: 100%;
  padding: var(--section-padding) var(--section-padding-x);
  gap: 40px;
  border-top: 2px solid transparent;
  border-image: linear-gradient(90deg, transparent, rgba(245, 204, 59, 0.45), transparent) 1;
}

.main-header {
  color: var(--white-color);
  font-size: var(--heading-size);
  text-align: center;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
}

.faq-item {
  background-color: var(--midnight-indigo-color);
  border: 1px solid rgba(245, 204, 59, 0.12);
  border-radius: var(--radius);
  overflow: hidden;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.faq-item:hover {
  border-color: rgba(245, 204, 59, 0.35);
}

.faq-item.open {
  box-shadow: var(--shadow-sm);
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 18px 20px;
  background: none;
  border: none;
  color: var(--white-color);
  font-family: var(--font-ui);
  font-weight: 600;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
}

.faq-icon {
  position: relative;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
}

.faq-icon::before,
.faq-icon::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: var(--dark-yellow-color);
  transform: translate(-50%, -50%);
  transition: transform 0.25s ease;
}

.faq-icon::before {
  width: 18px;
  height: 2px;
}

.faq-icon::after {
  width: 2px;
  height: 18px;
}

.faq-item.open .faq-icon::after {
  transform: translate(-50%, -50%) rotate(90deg) scale(0);
}

.faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.faq-item.open .faq-answer {
  grid-template-rows: 1fr;
}

.faq-answer-inner {
  overflow: hidden;
}

.faq-answer-inner p {
  color: var(--gray-color);
  font-size: 15px;
  line-height: 1.6;
  padding: 0 20px 18px;
}
</style>
