<script setup>
const props = defineProps({
  car: null,
});
</script>

<template>
  <div class="card">
    <img :src="car?.src" alt="" class="card__icon" />

    <h3 class="card__title">{{ car?.type }}</h3>

    <p class="card__txt">{{ car?.advice }}</p>

    <a href="#!" class="card__btn" :class="car?.styleNum">Learn More</a>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 50px 45px;
  max-height: 500px;
  height: 100%;
  @media (max-width: 992px) {
    width: 100%;
  }

  &:nth-of-type(1) {
    background: var(--primaryColor);
  }
  &:nth-of-type(2) {
    background: var(--secondaryColor);
  }
  &:nth-of-type(3) {
    background: var(--thirdColor);
  }

  &__icon {
    margin-bottom: 30px;
}

&__title {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 30px;
    color: var(--backHeadBtnColor);
    margin-bottom: 24px;
  }

  &__txt {
    color: var(--paragraphsColor);
    line-height: 1.8;
    width: 210px;
    margin-bottom: 115px;
  }

  &__btn {
    background: var(--backHeadBtnColor);
    border-radius: 40px;
    padding: 10px 20px;
    font-size: 15px;
    border: 2px solid var(--backHeadBtnColor);
    transition: 300ms;
  }
}

.first {
  color: var(--primaryColor);

  &:hover {
    color: var(--backHeadBtnColor);
    background: transparent;
  }
}
.second {
  color: var(--secondaryColor);
  &:hover {
    color: var(--backHeadBtnColor);
    background: transparent;
  }
}
.third {
  color: var(--thirdColor);
  &:hover {
    color: var(--backHeadBtnColor);
    background: transparent;
  }
}
</style>
