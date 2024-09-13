<script lang="ts" setup></script>

<template>
  <div class="container">
    <h1 class="main-header" id="faq">Întrebări frecvente</h1>

    <div class="question-and-answer">
      <h2>Cum pot comanda materiale de construcție?</h2>
      <h3>
        Pentru a comanda, vă invităm să ne contactați direct apăsând pe butonul
        Contactează-ne Echipa noastră de consultanți este pregătită să vă
        ghideze în alegerea celor mai potrivite materiale pentru proiectul dvs.
        și să vă ofere toate detaliile necesare pentru finalizarea comenzii.
      </h3>
    </div>

    <div class="question-and-answer">
      <h2>Oferiți consultanță pentru alegerea materialelor?</h2>
      <h3>
        Da, oferim consultanță personalizată online. Echipa noastră de experți
        este la dispoziția dumneavoastră pentru a răspunde întrebărilor și
        pentru a vă ajuta să alegeți materialele cele mai potrivite pentru
        nevoile proiectului dvs.
      </h3>
    </div>

    <div class="question-and-answer">
      <h2>Care este termenul de livrare?</h2>
      <h3>
        Termenul de livrare variază în funcție de disponibilitatea produselor și
        de locația de livrare. În mod obișnuit, livrăm în termen de 1-3 zile
        lucrătoare. Pentru detalii în privința prețului de livrare pentru
        oraș/sat/regiunea dumneavoastră vă rugăm să ne Contactați.
      </h3>
    </div>

    <div class="question-and-answer">
      <h2>Există o comandă minimă pentru livrare?</h2>
      <h3>
        Nu impunem o valoare minimă pentru comenzi, însă costurile de livrare
        pot varia în funcție de dimensiunea și greutatea totală a comenzii.
        Pentru detalii precise, vă invităm să discutați cu unul dintre
        consultanții noștri.
      </h3>
    </div>

    <div class="question-and-answer">
      <h2>
        Ce se întâmplă dacă produsul primit nu corespunde cu ceea ce am
        comandat?
      </h2>
      <h3>
        Dacă întâmpinați orice discrepanțe între comanda plasată și produsul
        primit, vă rugăm să ne contactați imediat. Echipa noastră va investiga
        situația și va lua măsurile necesare pentru a o rezolva cât mai rapid
        posibil.
      </h3>
    </div>

    <div class="question-and-answer">
      <h2>Pot returna produsele dacă nu sunt mulțumit?</h2>
      <h3>
        Acceptăm returnarea produselor în termen de 14 zile de la livrare, cu
        condiția ca acestea să fie în starea originală și să nu fi fost
        utilizate. Pentru mai multe detalii despre procesul de returnare, vă
        rugăm să ne contactați.
      </h3>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: var(--deep-ocean-blue-color);
  width: 100%;
  padding: 16px;
  gap: 40px;
}

.main-header {
  color: var(--white-color);
  font-size: 50px;
  text-align: center;
}

.question-and-answer h2 {
  color: var(--white-color);
  font-size: 24px;
  text-align: center;
}

.question-and-answer h3 {
  color: var(--gray-color);
  font-size: 16px;
  text-align: center;
}
</style>
