<template>
  <Navigation />
  <div class="intro">
    <div class="title">
      <h2>サービス紹介</h2>
    </div>
    <hr />
    <p>更新日:2021年12月10日</p>
    <div class="description">
      <br />
      <h3>
        最近、誰もがオンラインでの仕事や授業が中心になりました。
        また、プライベートでもオンラインツールを使ったアクティビティを楽しむことが日常になりました。
      </h3>
      <br />
      <h4>この図書館では新しいオンラインアクティビティを紹介しています。</h4>
    </div>
    <hr />
  </div>
  <div class="card-container">
    <div class="row">
      <Card v-for="(service, i) in allServices" :key="i" :service="service" />
    </div>
  </div>
  <Footer />
</template>

<script>
import Navigation from "@/components/Navigation";
import Card from "@/components/helpers/Card.vue";
import Footer from "@/components/helpers/Footer.vue";
import services from "@/data/services";

export default {
  name: "Home",
  components: { Card, Footer, Navigation },
  data() {
    return {
      allServices: [...services], // All services from json file.
    };
  },
};
</script>

<style lang="scss" scoped>
.intro {
  padding-top: 150px;
}
.title {
  text-align: center;
}
p {
  margin-left: 20px;
}
hr {
  margin-top: 40px;
  border: 3px solid #457b9d;
  opacity: 1;
}
.description {
  text-align: center;
  max-width: 1620px;
  word-wrap: break-word;
  margin: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (max-width: 625px) {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 12px rgb(233 233 233);
    transition: all 0.5s;
    padding: 20px 40px;
  }
  @media (min-width: 992px) {
    max-width: 800px;
  }
  @media (min-width: 1366px) {
    max-width: 1020px;
  }
  @media (min-width: 1920px) {
    max-width: 1620px;
  }
}
.card-container {
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
</style>
