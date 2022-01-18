<template>
  <GoBack />
  <section>
    <div class="heading">
      <h1>{{ name }}</h1>
    </div>
    <hr />
    <div class="description">
      <img :src="image" class="img" />
      <div class="main">
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="description2">
      <img :src="image2" class="img2" />
      <div class="main2">
        <p>{{ description2 }}</p>
      </div>
    </div>
    <div class="button-container">
      <button class="btn btn-secondary" v-on:click="locate">
        やってみます
      </button>
    </div>
  </section>
  <BackToTop />
  <Footer />
</template>

<script>
import Footer from "@/components/helpers/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";
import GoBack from "@/components/helpers/GoBack.vue";
export default {
  name: "Details",
  components: { Footer, BackToTop, GoBack },
  props: [
    "id",
    "name",
    "description",
    "image",
    "figcaption",
    "href",
    "image2",
    "description2",
  ],

  data() {
    return {};
  },
  methods: {
    locate() {
      // location.href = this.href;
      const location = this.$router.replace({
        redirect: (window.location.href = `${this.href}`),
      });
      window.open(location, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 70px;
  hr {
    @media (min-width: 768px) {
      margin: 4.5rem 0 4.5rem 0;
      border: 3px solid #457b9d;
      opacity: 1;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .heading {
    margin-bottom: 50px;
    padding-top: 140px;
    text-align: center;
    justify-content: center;
    align-content: center;
    @media (max-width: 768px) {
      margin-bottom: 20px;
      padding: 120px 20px 0 20px;
    }
  }
  .description {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    align-content: center;
    @media screen and (max-width: 400px) {
      flex-direction: column;
    }
    .main {
      flex: 70%;
      display: flex;
      text-align: left;
      align-items: center;
      max-width: 550px;
      max-height: 300px;
      padding: 20px 40px;
      background-color: rgb(255, 255, 255);
      border-radius: 20px;
      border: none;
      box-shadow: 3px 3px 3px 4px rgb(233 233 233);
      transition: all 0.5s;
      @media screen and (max-width: 886px) {
        margin-top: 15px;
      }
      p {
        line-height: 1.5em;
        font-size: 24px;
        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
    }
    .img {
      width: 100%;
      height: 250px;
      margin-right: -10px;
      max-width: 450px;
      max-height: 300px;
      height: auto;
      flex: 30%;
    }
  }
  .description2 {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    align-content: center;
    @media screen and (max-width: 400px) {
      flex-direction: column;
    }
    .main2 {
      flex: 70%;
      display: flex;
      text-align: left;
      align-items: center;
      max-width: 550px;
      max-height: 300px;
      padding: 20px 40px;
      background-color: rgb(255, 255, 255);
      border-radius: 20px;
      border: none;
      box-shadow: 3px 3px 3px 4px rgb(233 233 233);
      transition: all 0.5s;
      @media screen and (max-width: 886px) {
        margin-top: 15px;
      }
      p {
        line-height: 1.5em;
        font-size: 24px;
        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
    }
    .img2 {
      height: 250px;
      width: 100%;
      margin-right: -10px;
      max-width: 450px;
      max-height: 300px;
      flex: 30%;
    }
  }
  .button-container {
    text-align: center;
    justify-content: center;
    align-content: center;
    margin-top: 50px;
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
      font-size: 1rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    .btn-secondary {
      background-image: url("../assets/external-link.png");
      background-repeat: no-repeat;
      background-position: right 10px center;
      padding-left: 5px;
      width: 160px;
      height: 60px;
      border-radius: 30px;
      color: #fff;
      background-color: #e63946;
      -webkit-box-shadow: 5px 9px 11px -2px rgba(162, 162, 162, 0.68);
      box-shadow: 5px 9px 11px -2px rgba(162, 162, 162, 0.68);
    }
  }
}
</style>
