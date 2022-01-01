<template>
  <div class="home">
    <section class="hero"></section>
    <section class="hero-text container">
      <div>
        <h2>あなたにあう趣味を探します</h2>
        <h2>おうちで楽しく過ごすためのサービスをご覧ください。</h2>
      </div>
    </section>
    <div class="card-container">
      <div class="row">
        <card v-for="(service, i) in allServices" :key="i" :service="service" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/helpers/Card.vue";
import services from "@/data/services";

export default {
  name: "Home",
  components: { Card },
  data() {
    return {
      allServices: [...services], // All services from json file.
    };
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  max-width: 1620px;
  width: 80%;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1366px) {
    max-width: 1420px;
  }
  @media (min-width: 1920px) {
    max-width: 1620px;
  }
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}

.hero {
  content: url("../assets/first impress22.png");
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 100%;
  max-height: 100%;
}

.hero-text {
  height: 100%;
  color: rgb(0, 0, 0);
  text-align: center;

  h4 {
    text-transform: uppercase;
    font-size: 22px;
    padding-bottom: 4px;
  }

  h2 {
    font-size: 24px;
    margin: 20px 0;
    @media (min-width: 550px) {
      font-size: 35px;
    }
  }

  hr:nth-child(2) {
    max-width: 365px;
    margin-bottom: 16px;
  }
  hr:nth-child(4) {
    height: 6px;
    background-color: #fff;
    border: none;
    max-width: 85px;
    margin-top: 16px;
  }
}
</style>
