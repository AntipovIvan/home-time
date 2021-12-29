<template>
  <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <!-- <h4>Vue Responsive Nav Menu</h4>
        <hr />
        <h2>
          With Vue <br />
          Animations
        </h2>
        <hr /> -->
      </div>
    </section>
    <section>
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
        tenet
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
// .home {
//   display: flex;
//   min-height: 100vh;
//   flex-direction: column;
// }
.hero {
  background-image: url("../assets/first impress22.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  height: 95vh;
  background-size: contain;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

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
