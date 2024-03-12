<script lang="ts" setup></script>

<template>
  <div class="container">
    <h1 class="main-header">De ce să ne alegi pe noi?</h1>

    <div class="box">
      <h3 class="subheader">Diversitate inegalabilă</h3>
      <p class="text">
        Oferim o gamă largă de materiale de construcție pentru toate etapele
        proiectului tău - de la fundație până la finisaje.
      </p>
    </div>

    <div class="box">
      <h3 class="subheader">Calitate garantată</h3>
      <p class="text">
        Selectăm cu grijă produsele, colaborând doar cu furnizori de încredere
        și recunoscuți pentru calitatea superioară a materialelor lor.
      </p>
    </div>

    <div class="box">
      <h3 class="subheader">Consultanță personalizată</h3>
      <p class="text">
        Beneficiezi de consultanță tehnică de specialitate, asigurându-te că
        alegerea ta este cea mai potrivită pentru necesitățile specifice ale
        proiectului tău.
      </p>
    </div>

    <div class="box">
      <h3 class="subheader">Prețuri competitive</h3>
      <p class="text">
        Oferim prețuri competitive, promoții regulate și opțiuni flexibile de
        plată pentru a-ți face achizițiile cât mai accesibile.
      </p>
    </div>

    <div class="box">
      <h3 class="subheader">Livrare rapidă și eficientă</h3>
      <p class="text">
        Cu serviciul nostru de livrare promptă, materialele de care ai nevoie
        ajung la tine rapid și în siguranță, permitându-ți să menții proiectul
        pe drumul cel bun, fără întârzieri neașteptate.
      </p>
    </div>

    <div class="materials-image">
      <img
        src="../assets/images/materials.png"
        alt="image with different material used in construction"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: var(--midnight-indigo-color);
  width: 100%;
  padding: 16px 16px;
  gap: 40px;
}

.main-header {
  color: var(--white-color);
  font-size: 24px;
  text-align: center;
}

.box {
  display: flex;
  flex-direction: column;
  background-color: var(--deep-ocean-blue-color);
  padding: 16px 24px;
  border-radius: 16px;
  gap: 8px;
}

.subheader {
  color: var(--gray-color);
  font-size: 16px;
}

.text {
  color: var(--white-color);
  font-size: 12px;
}

.materials-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
