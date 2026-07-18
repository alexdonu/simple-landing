<script lang="ts" setup></script>

<template>
  <div class="container">
    <h1 class="main-header" id="about-us">
      Construiește-ți visul, simplu și eficient!
    </h1>

    <h3 class="subheader">
      La “Roman&Svetlana” înțelegem că fiecare proiect de construcție este unic
      și merită cea mai bună atenție și resurse. Cu un asortiment vast de
      materiale de construcție, de la cele fundamentale până la cele mai
      inovatoare soluții, ne asigurăm că vei găsi tot ce ai nevoie sub un singur
      acoperiș.
    </h3>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  text-overflow: ellipsis;
  background-color: var(--deep-ocean-blue-color);
  padding: var(--section-padding) var(--section-padding-x);
  gap: 40px;
  align-items: center;
}

.main-header {
  color: var(--gray-color);
  font-size: var(--heading-size);
}

.subheader {
  color: var(--white-color);
  font-size: var(--subheading-size);
  max-width: 720px;
}
</style>
