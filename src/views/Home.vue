<template>
  <div class="home">
    <section class="hero"></section>
    <section class="hero-text container">
      <div>
        <p>あなたにあう趣味を探します</p>
        <p>おうちで楽しく過ごすためのサービスをご覧ください。</p>
      </div>
    </section>
    <HelloCards />
    <section>
      <div class="service-container">
        <div class="row">
          <div
            class="service-card"
            v-for="service in services.slice(0, 3)"
            :key="service.category"
          >
            <div class="row">
              <div>
                <p class="service-title">{{ service.name }}</p>
              </div>
              <div>
                <img
                  :src="service.image"
                  alt="サービス画像"
                  class="service-img"
                />
              </div>
              <div class="content">
                <div class="service-body">
                  <p class="figcaption">{{ service.figcaption }}</p>
                  <p class="text-service">
                    {{ service.description }}
                  </p>
                </div>
              </div>
            </div>
            <HorizontalRuler />
          </div>
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
    <BackToTop />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/helpers/Footer.vue";
import HelloCards from "@/components/helpers/HelloCards.vue";
import BackToTop from "@/components/BackToTop.vue";
import store from "@/data/store";
import HorizontalRuler from "@/components/helpers/HorizontalRuler.vue";

export default {
  name: "Home",
  components: { HelloCards, Footer, BackToTop, HorizontalRuler },
  data() {
    return {
      services: store.services,
    };
  },
};
</script>

<style lang="scss" scoped>
.filter {
  display: none;
}
.service-container {
  text-align: center;
  max-width: 1620px;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;

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
.service-card {
  max-width: 330px;
  margin: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    max-width: 330px;
    margin: 1.5rem 1rem 0 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .service-body {
    flex: 1 1 auto;
    padding: 1rem 0rem;
  }
  .figcaption {
    font-size: 0.875rem;
    margin-top: -10px;
  }
  .text-service {
    font-size: 1.1rem;
    text-align: left;
    min-height: 160px;
    @media (max-width: 768px) {
      background-color: rgb(255, 255, 255);
      border-radius: 10px;
      border: none;
      box-shadow: 1px 1px 12px rgb(233 233 233);
      transition: all 0.5s;
      width: 100%;
      padding: 20px 40px;
      height: 100%;
    }
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .service-title {
    font-size: 1.4rem;
    margin: 0;
  }
  .content {
    flex: 0 0 auto;
    width: 400px;
  }

  .service-img {
    width: 100%;
    max-width: none;
    height: 163px;
  }

  .btn-container {
    text-align: end;
    position: relative;
    bottom: 10px;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
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
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.41' height='12' viewBox='0 0 7.41 12'%3E%3Cpath d='M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z' transform='translate(-8.59 -6)' fill='%23fff'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    width: 130px;
    border-radius: 20px;
    color: #fff;
    background-color: #e63946;
    -webkit-box-shadow: 5px 9px 11px -2px rgba(162, 162, 162, 0.68);
    box-shadow: 5px 9px 11px -2px rgba(162, 162, 162, 0.68);
  }
}
h5 {
  line-height: 1.6;
}
.near-footer {
  @media (max-width: 768px) {
    margin-top: 30px;
  }

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

  p {
    font-size: 16px;
    margin: 20px 0;
    @media (min-width: 550px) {
      font-size: 25px;
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
