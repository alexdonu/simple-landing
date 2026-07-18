<script lang="ts" setup></script>

<template>
  <div class="container">
    <h1 class="main-header">De ce să ne alegi pe noi?</h1>

    <div class="grid">
      <div class="box">
        <svg
          class="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
        >
          <path
            d="M12 3 2 8l10 5 10-5-10-5Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 12l10 5 10-5M2 16l10 5 10-5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h3 class="subheader">Diversitate inegalabilă</h3>
        <p class="text">
          Oferim o gamă largă de materiale de construcție pentru toate etapele
          proiectului tău - de la fundație până la finisaje.
        </p>
      </div>

      <div class="box">
        <svg
          class="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
        >
          <path
            d="M12 3 4 6v6c0 4.5 3.2 7.6 8 9 4.8-1.4 8-4.5 8-9V6l-8-3Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <h3 class="subheader">Calitate garantată</h3>
        <p class="text">
          Selectăm cu grijă produsele, colaborând doar cu furnizori de
          încredere și recunoscuți pentru calitatea superioară a materialelor
          lor.
        </p>
      </div>

      <div class="box">
        <svg
          class="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
        >
          <path
            d="M4 5h16v10H8l-4 4V5Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M8 9h8M8 12h5" stroke-linecap="round" />
        </svg>
        <h3 class="subheader">Consultanță personalizată</h3>
        <p class="text">
          Beneficiezi de consultanță tehnică de specialitate, asigurându-te
          că alegerea ta este cea mai potrivită pentru necesitățile specifice
          ale proiectului tău.
        </p>
      </div>

      <div class="box">
        <svg
          class="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
        >
          <path
            d="M20 12.5 12.5 20a1.5 1.5 0 0 1-2.1 0L4 13.6a1.5 1.5 0 0 1 0-2.1L11.5 4H18a2 2 0 0 1 2 2v6.5Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="15" cy="9" r="1.5" />
        </svg>
        <h3 class="subheader">Prețuri competitive</h3>
        <p class="text">
          Oferim prețuri competitive, promoții regulate și opțiuni flexibile
          de plată pentru a-ți face achizițiile cât mai accesibile.
        </p>
      </div>

      <div class="box">
        <svg
          class="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
        >
          <path
            d="M2 7h11v9H2V7Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 10h4l4 3v3h-8v-6Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="6.5" cy="18" r="1.6" />
          <circle cx="17" cy="18" r="1.6" />
        </svg>
        <h3 class="subheader">Livrare rapidă și eficientă</h3>
        <p class="text">
          Cu serviciul nostru de livrare promptă, materialele de care ai
          nevoie ajung la tine rapid și în siguranță, permitându-ți să menții
          proiectul pe drumul cel bun, fără întârzieri neașteptate.
        </p>
      </div>
    </div>

    <div class="materials-image">
      <img
        src="../../assets/images/materials.png"
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
  padding: var(--section-padding) var(--section-padding-x);
  gap: 48px;
  border-top: 2px solid transparent;
  border-image: linear-gradient(90deg, transparent, rgba(245, 204, 59, 0.45), transparent) 1;
}

.main-header {
  color: var(--white-color);
  font-size: var(--heading-size);
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.box {
  display: flex;
  flex-direction: column;
  background-color: var(--deep-ocean-blue-color);
  border: 1px solid rgba(245, 204, 59, 0.12);
  padding: 24px;
  border-radius: var(--radius);
  gap: 10px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.box:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(245, 204, 59, 0.4);
}

.icon {
  width: 32px;
  height: 32px;
  color: var(--dark-yellow-color);
  margin-bottom: 4px;
}

.subheader {
  color: var(--gray-color);
  font-size: var(--subheading-size);
}

.text {
  color: var(--white-color);
  font-size: 16px;
  line-height: 1.5;
}

.materials-image {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}

.materials-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (min-width: 700px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
