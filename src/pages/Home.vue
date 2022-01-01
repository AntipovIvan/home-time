<template>
  <div class="home">
    <section class="hero"></section>
    <section class="hero-text container">
      <div>
        <h2>あなたにあう趣味を探します</h2>
        <h2>おうちで楽しく過ごすためのサービスをご覧ください。</h2>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
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
