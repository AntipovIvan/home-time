<template>
  <div class="container"></div>
  <footer>
    <!-- Footer main -->
    <section class="ft-main">
      <div class="">
        <router-link class="link" :to="{ name: 'Home' }"
          ><img src="@/assets/logoFooter.png" alt=""
        /></router-link>
      </div>
      <router-link class="ft-main-item" :to="{ name: 'サービス紹介' }">
        <h2 class="ft-title">サービス紹介</h2>
      </router-link>
      <router-link class="ft-main-item" :to="{ name: 'チャットルム' }">
        <h2 class="ft-title">チャットルーム</h2>
      </router-link>
      <router-link class="ft-main-item" :to="{ name: 'お問い合わせ' }">
        <h2 class="ft-title">お問い合わせ</h2>
      </router-link>
      <router-link class="ft-main-item" :to="{ name: 'ノーイメージ' }">
        <h2 class="ft-title">ノーイメジウェブサイト</h2>
      </router-link>
    </section>

    <section class="ft-legal">
      <ul class="ft-legal-list">
        <li>&copy; 2019 Copyright Nowrap Inc.</li>
      </ul>
    </section>
  </footer>
  <!-- <footer :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <router-link class="link" :to="{ name: 'Home' }"
          ><img src="@/assets/logoFooter.png" alt=""
        /></router-link>
      </div>
      <ul class="navigation">
        <li class="li2">
          <router-link class="link" :to="{ name: 'サービス紹介' }"
            >サービス紹介</router-link
          >
        </li>
        <li class="li3">
          <router-link class="link" :to="{ name: 'チャットルム' }"
            >チャットルム</router-link
          >
        </li>
        <li class="li4">
          <router-link class="link" :to="{ name: 'お問い合わせ' }"
            >お問い合わせ</router-link
          >
        </li>
      </ul>
    </nav>
  </footer> -->
</template>

<script>
export default {
  name: "footer",
  data() {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding-left: 0;
}
footer {
  background-color: #457b9d;
  color: #bbb;
  line-height: 1.5;
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
  img {
    width: 150px;
    transition: 0.5s ease all;
  }
}
.ft-title {
  color: #fff;
  font-size: 1.375rem;
  padding-bottom: 0.625rem;
}

.container {
  flex: 1;
}
.ft-main {
  padding: 1.25rem 1.875rem;
  display: flex;
  flex-wrap: wrap;
}
@media only screen and (min-width: 576px) {
  .ft-main {
    justify-content: space-evenly;
  }
}
@media only screen and (min-width: 1200px) {
  .ft-main {
    justify-content: space-evenly;
  }
}
.ft-main-item {
  padding: 1.25rem;
  min-width: 12.5rem;
}
.ft-social {
  padding: 0 1.875rem 1.25rem;
}
.ft-social-list {
  display: flex;
  justify-content: center;
  border-top: 1px rgb(255, 255, 255) solid;
  padding-top: 1.25rem;
}
.ft-social-list li {
  margin: 0.5rem;
  font-size: 1.25rem;
}
.ft-legal {
  padding: 0.9375rem 1.875rem;
  background-color: #457b9d;
}
.ft-legal-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.ft-legal-list li {
  margin: 0.125rem 0.625rem;
  white-space: nowrap;
  color: white;
}
.ft-legal-list li:nth-last-child(2) {
  flex: 1;
}
</style>
