<template>
  <div class="home">
    <section class="hero"></section>
    <section class="hero-text container">
      <div>
        <h2>あなたにあう趣味を探します</h2>
        <h2>おうちで楽しく過ごすためのサービスをご覧ください。</h2>
      </div>
    </section>
    <HelloCards />
    <section>
      <div class="card-container">
        <div class="row">
          <Card
            v-for="(service, i) in allServices.slice(0, 2)"
            :key="i"
            :service="service"
          />
        </div>
      </div>
    </section>
    <section class="near-footer">
      <h4>自由な時間の質を高めよう。</h4>
      <div class="text-card">
        <h5>
          この図書館はあなたが興味を持っているかもしれないコンテンツをアーカイブしています
        </h5>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Card from "@/components/helpers/Card.vue";
import Footer from "@/components/helpers/Footer.vue";
import HelloCards from "@/components/helpers/HelloCards.vue";

import services from "@/data/services";

export default {
  name: "Home",
  components: { HelloCards, Card, Footer },
  data() {
    return {
      allServices: [...services], // All services from json file.
    };
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  text-align: center !important;
  max-width: 1620px;
  width: 90%;
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
h5 {
  line-height: 1.6;
}
.near-footer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  @media (max-width: 625px) {
    flex-direction: row;
  }
}
.text-card {
  margin: 20px 0;

  @media (max-width: 625px) {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 12px rgb(233 233 233);
    transition: all 0.5s;
    width: 45vh;
    padding: 20px 40px;
    height: 100%;
  }
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
