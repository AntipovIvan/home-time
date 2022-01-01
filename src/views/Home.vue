<template>
  <div class="home">
    <section class="hero"></section>
    <section>
      <div class="hero-text container">
        <h4>あなたにあう趣味を探します</h4>
        <h2>おうちで楽しく過ごすためのサービスをご覧ください。</h2>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iusto
        voluptates et optio iure repellat reiciendis, esse accusamus blanditiis
        quas quisquam assumenda? Repellendus hic molestias magni mollitia natus
        asperiores cupiditate quis delectus, impedit, id doloribus rerum optio
        nihil ex repudiandae ab dolorum totam? Blanditiis ab unde fugit
        repellendus laboriosam id ducimus tempore molestiae nam impedit ea
        libero non quis, iusto inventore, minus magni illo modi rerum, incidunt
        officiis voluptatum quae! Ullam accusantium quae incidunt quibusdam illo
        excepturi nam repudiandae animi. Fuga amet commodi minus aperiam sint,
        dolore placeat. Recusandae deleniti temporibus ipsam. Quos voluptatibus
        tenetres cupiditate quis delectus, impedit, id doloribus rerum optio
        nihil ex repudiandae ab dolorum totam? Blanditiis ab unde fugit
        repellendus laboriosam id ducimus tempore molestiae nam impedit ea
        libero non quis, iusto inventore, minus magni illo modi rerum, incidunt
        officiis voluptatum quae! Ullam accusantium quae incidunt quibusdam illo
        excepturi nam repudiandae animres cupiditate quis delectus, impedit, id
        doloribus rerum optio nihil ex repudiandae ab dolorum totam? Blanditiis
        ab unde fugit repellendus laboriosam id ducimus tempore molestiae nam
        impedit ea libero non quis, iusto inventore, minus magni illo modi
        rerum, incidunt officiis voluptatum quae! Ullam accusantium quae
        incidunt quibusdam illo excepturi nam repudiandae animres cupiditate
        quis delectus, impedit, id doloribus rerum optio nihil ex repudiandae ab
        dolorum totam? Blanditiis ab unde fugit repellendus laboriosam id
        ducimus tempore molestiae nam impedit ea libero non quis, iusto
        inventore, minus magni illo modi rerum, incidunt officiis voluptatum
        quae! Ullam accusantium quae incidunt quibusdam illo excepturi nam
        repudiandae anim
      </p>
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
  background-image: url("../assets/first impress22.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-y: 80px;
  position: relative;
  height: 95vh;
  background-size: contain;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .hero-text {
    padding-top: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(0, 0, 0);

    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }

    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
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
}
</style>
