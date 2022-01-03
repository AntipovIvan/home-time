<template>
  <div class="service-card">
    <div class="row">
      <div class="card-title">
        <h4 class="service-title">{{ service.name }}</h4>
      </div>
      <div>
        <img :src="service.image" alt="サービス画像" class="card-img" />
      </div>
      <div class="content">
        <div class="card-body">
          <p class="figcaption">{{ service.figcaption }}</p>
          <p class="text-card">
            {{ service.description }}
          </p>
        </div>
      </div>
      <div class="button-container">
        <button class="btn btn-secondary">詳しく</button>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.service-card {
  max-width: 330px;
  margin: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media (max-width: 576px) {
    max-width: 330px;
    margin: 0 1rem 0 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
  }
}
hr {
  @media (max-width: 768px) {
    margin-top: 40px;
    border: 3px solid #0d3853;
  }
  @media (min-width: 768px) {
    display: none;
  }
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 0rem;
}
.figcaption {
  font-size: 0.875rem;
  margin-top: -10px;
}
.text-card {
  @media (max-width: 768px) {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 12px rgb(233 233 233);
    transition: all 0.5s;
    width: 45vh;
    padding: 20px 40px;
    margin-left: -4vh;
    height: 100%;
  }
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
.service-title {
  font-size: 1.5rem;
  margin: 0;
}
.content {
  flex: 0 0 auto;
  width: 400px;
}

.card-img {
  width: 100%;
  max-width: none;
  height: 163px;
}

.button-container {
  text-align: end;
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
}
</style>
