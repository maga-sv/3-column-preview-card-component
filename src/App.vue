<script setup>
import Card from "./components/card/Card.vue";
import { useCarStore } from "./stores/cars.js";

const carStore = useCarStore()

</script>

<template>

<main>

  <section class="cars">

    <div class="container">

      <div class="cars__cards">
        <Card v-for="(car, index) in carStore?.cars" :key="index" :car="car" />

      </div>

    </div>

  </section>

</main>

</template>

<style lang="scss" scoped>

main {
  height: 100vh;
  display: grid;
  place-items: center;
}

.cars {
  
  .container {
    width: 100%;
  }

  &__cards {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    flex-wrap: wrap;

    @media (max-width: 992px) {

      flex-direction: column;

    }
  }
}

</style>