<template>
  <footer>
    <section class="ft-main">
      <router-link class="link" :to="{ name: 'Home' }"
        ><img src="@/assets/logoFooter.png" alt=""
      /></router-link>
      <router-link class="ft-main-item" :to="{ name: 'List' }">
        <p class="ft-title">サービス紹介</p>
      </router-link>
      <router-link class="ft-main-item" :to="{ name: 'Chatroom' }">
        <p class="ft-title">チャットルーム</p>
      </router-link>
      <router-link class="ft-main-item" :to="{ name: 'About' }">
        <p class="ft-title">お問い合わせ</p>
      </router-link>
      <router-link class="ft-main-item" :to="{ name: 'ノーイメージ' }">
        <p class="ft-title">ノーイメジウェブサイト</p>
      </router-link>
    </section>
    <hr />
    <section class="ft-legal">
      <ul class="ft-legal-list">
        <li>&copy; 2022 株式会社 ノーイメージ</li>
      </ul>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #457b9d;
  color: #bbb;
  line-height: 1.5;
  @media (min-width: 1919px) {
    height: 160px;
  }
  hr {
    @media (max-width: 576px) {
      display: block;
      margin-bottom: 0;
      border: 2px solid #ffffff;
      opacity: 1;
    }
    display: none;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  footer a {
    text-decoration: none;
    color: #eee;
  }
  a:hover {
    text-decoration: underline;
  }
  .link {
    display: flex;
    align-items: center;
    :first-child {
      @media only screen and (min-width: 576px) {
        position: relative;
        bottom: -30px;
        left: 5%;
      }
    }
    img {
      width: 140px;
      transition: 0.5s ease all;
    }
  }
  .ft-title {
    font-size: 18px;
    color: #fff;
    padding-bottom: 0.625rem;
    text-align: center;
    &:hover {
      color: #457b9d;
      background-color: white;
      border-radius: 5px;
    }
  }

  .ft-main {
    padding: 0 1.875rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media only screen and (min-width: 1200px) {
    .ft-main {
      justify-content: space-evenly;
    }
  }
  .ft-main-item {
    text-decoration: none;
    padding: 1.25rem 1.25rem 0 1.25rem;
    min-width: 12.5rem;
    max-height: 50px;
  }

  .ft-legal {
    margin-top: 20px;
    padding-bottom: 20px;
    background-color: #457b9d;
  }
  .ft-legal-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .ft-legal-list li {
    white-space: nowrap;
    color: white;
  }
  .ft-legal-list li:nth-last-child(2) {
    flex: 1;
  }
}
</style>
