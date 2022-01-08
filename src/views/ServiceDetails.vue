<template>
  <section>
    <div class="heading">
      <h1>{{ name }}</h1>
      <hr />
    </div>
    <div class="description">
      <img :src="image" class="img" />
      <div class="main">
        <h3>{{ description }}</h3>
      </div>
    </div>
    <div class="button-container">
      <!-- <router-link
          :to="{
            name: 'ServiceDetails',
            params: {
              id: service.id,
              name: service.name,
              description: service.description,
              image: service.image,
              figcaption: service.figcaption,
            },
          }"
        > -->
      <button class="btn btn-secondary">やってみます</button>
      <!-- </router-link
        > -->
    </div>
  </section>
  <Footer />
</template>

<script>
import Footer from "@/components/helpers/Footer.vue";

export default {
  name: "Details",
  components: { Footer },
  props: ["id", "name", "description", "image", "figcaption"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 200px;
  .heading {
    margin-bottom: 100px;
    padding-top: 140px;
    text-align: center;
    justify-content: center;
    align-content: center;
    @media (max-width: 768px) {
      margin-bottom: 20px;
      padding-top: 120px;
    }
    hr {
      @media (min-width: 768px) {
        margin: 1rem 0 0.5rem 0;
        border: 3px solid #457b9d;
        opacity: 1;
      }
      @media (max-width: 768px) {
        display: none;
      }
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
      h3 {
        line-height: 1.5em;
      }
    }
    .img {
      width: 100%;
      margin-right: -10px;
      max-width: 450px;
      max-height: 300px;
      height: auto;
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
