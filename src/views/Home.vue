<template>
  <Navigation />
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
      <div class="service-container">
        <div class="row">
          <Service />
        </div>
      </div>
    </section>
    <section class="near-footer">
      <h4>自由な時間の質を高めよう。</h4>
      <div class="text-service">
        <h5>
          この図書館はあなたが興味を持っているかもしれないコンテンツをアーカイブしています
        </h5>
      </div>
      <div class="button-container">
        <router-link class="link" :to="{ name: 'List' }">
          <button class="btn btn-secondary">早速見よう</button></router-link
        >
      </div>
    </section>
    <back-to-top></back-to-top>
    <Footer />
  </div>
</template>

<script>
import Service from "@/components/helpers/Service.vue";
import Footer from "@/components/helpers/Footer.vue";
import HelloCards from "@/components/helpers/HelloCards.vue";
import BackToTop from "@/components/BackToTop.vue";

export default {
  name: "Home",
  components: { HelloCards, Service, Footer, BackToTop },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.service-container {
  text-align: center;
  max-width: 1620px;
  width: 90%;
  margin-right: auto;
  margin-left: auto;

  .row {
    justify-content: center;
    align-items: center;
  }

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
  @media (max-width: 768px) {
    margin: 0;
  }
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  @media (max-width: 625px) {
    flex-direction: row;
  }
}
.text-service {
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
  padding-top: 100px;
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
}
.button-container {
  text-align: center;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: middle;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-secondary {
  -webkit-box-shadow: 5px 9px 11px -2px rgba(162, 162, 162, 0.68);
  box-shadow: 5px 9px 11px -2px rgba(162, 162, 162, 0.68);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.41' height='12' viewBox='0 0 7.41 12'%3E%3Cpath d='M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z' transform='translate(-8.59 -6)' fill='%23fff'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  width: 180px;
  height: 50px;
  border-radius: 30px;
  color: #fff;
  background-color: #e63946;
}
</style>
