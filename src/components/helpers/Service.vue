<template>
  <div class="container">
    <div class="filter">
      <label
        ><img src="@/assets/all.png" />
        <p>全て</p>
        <input type="radio" v-model="selectedCategory" value="All" />
      </label>
      <label
        ><input
          type="radio"
          v-model="selectedCategory"
          value="オンラインツアー"
        /><img src="@/assets/art.png" />
        <p>オンラインツアー</p></label
      >
      <label
        ><input
          type="radio"
          v-model="selectedCategory"
          value="健康の維持"
        /><img src="@/assets/Healthy.png" />
        <p>健康の維持</p></label
      >
      <label
        ><input
          type="radio"
          v-model="selectedCategory"
          value="トレーニングコース"
        /><img src="@/assets/courses.png" />
        <p>トレーニングコース</p></label
      >
      <label
        ><input type="radio" v-model="selectedCategory" value="その他" />
        <img src="@/assets/other.png" />
        <p>その他</p></label
      >
    </div>
  </div>

  <div
    class="service-card"
    v-for="services in filteredServices"
    :key="services.category"
  >
    <div class="row">
      <div class="service-title">
        <p class="service-title">{{ services.name }}</p>
      </div>
      <div>
        <img :src="services.image" alt="サービス画像" class="service-img" />
      </div>
      <div class="content">
        <div class="service-body">
          <p class="figcaption">{{ services.figcaption }}</p>
          <p class="text-service">
            {{ services.description }}
          </p>
        </div>
      </div>
      <div class="button-container">
        <router-link
          :to="{
            name: 'ServiceDetails',
            params: {
              id: services.id,
              name: services.name,
              description: services.description,
              image: services.image,
              figcaption: services.figcaption,
              href: services.href,
              image2: services.image2,
              description2: services.description2,
            },
          }"
        >
          <button class="btn btn-secondary">詳しく</button></router-link
        >
      </div>
    </div>
    <HorizontalRuler />
  </div>
</template>

<script>
import store from "@/data/store";
import HorizontalRuler from "@/components/helpers/HorizontalRuler.vue";
export default {
  components: { HorizontalRuler },
  props: {
    service: {
      type: Array,
    },
  },
  data() {
    return {
      services: store.services,
      selectedCategory: "All",
    };
  },
  computed: {
    filteredServices() {
      var category = this.selectedCategory;
      console.log(this.selectedCategory);
      if (category === "All") {
        return this.services;
      } else {
        return this.services.filter((services) => {
          return services.category === category;
        });
      }
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.filter {
  border-radius: 20px;
  background-color: #f1faee;
  filter: drop-shadow(0px 3px 0.1rem rgba(162, 162, 162, 0.68));
  height: 150px;
  width: 100%;
  border: none;
  margin-top: 10px;
  @media (max-width: 992px) {
    height: 350px;
    margin-top: 40px;
  }
  @media (max-width: 769px) {
    display: none;
  }
  label {
    padding-top: 10px;
    margin: 0 40px;
    img {
      width: 80px;
    }
    input {
      display: flex;
      opacity: 0;
      pointer-events: none;
    }
  }
}
.service-card {
  max-width: 330px;
  min-height: 500px;
  margin: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    max-width: 330px;
    margin: 0 1rem 0 1rem;
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
      width: 45vh;
      padding: 20px 40px;
      margin-left: -3.5vh;
      height: 100%;
    }
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .service-title {
    font-size: 20px;
    text-align: left;
    display: flex;
    align-items: flex-end;
    min-height: 90px;
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

  .button-container {
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
</style>
