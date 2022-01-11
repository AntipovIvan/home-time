<template>
  <section>
    <div class="hello">
      <div class="hello-image">
        <img src="@/assets/hellocards/fun.png" alt="fun time" class="image1" />
      </div>
      <div class="circle1"></div>
      <div class="hello-content first-content">
        <p>おうちで楽しく過ごすためコンテンツを世界中から集めてきました。</p>
      </div>
    </div>
    <div class="hello">
      <div class="hello-image">
        <img
          src="@/assets/hellocards/horizon.png"
          alt="horizon"
          class="image2"
        />
      </div>
      <div class="circle2"></div>
      <div class="hello-content second-content">
        <p>新しい知識を学んであなたの視野を広げませんか。</p>
      </div>
    </div>
    <div class="hello">
      <div class="hello-image">
        <img
          src="@/assets/hellocards/talks.png"
          alt="many talks"
          class="image3"
        />
      </div>
      <div class="circle3"></div>
      <div class="hello-content third-content">
        <p>世界中のユーザーとチャットをして、知識を共有しよう。</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  margin-top: 50px;
  p {
    margin: 0;
    font-size: 1.2em;
  }
  .hello {
    background-color: #f1faee;
    filter: drop-shadow(0px 3px 0.1rem rgba(162, 162, 162, 0.68));
    height: 150px;
    width: 80%;
    border: none;
    margin-top: 90px;
    @media (max-width: 625px) {
      height: 350px;
      margin-top: 40px;
    }

    .hello-image {
      margin-left: 70px;
      .image1,
      .image3 {
        position: absolute;
        top: -100px;
        left: 90px;
        border-radius: 50%;
        -webkit-box-shadow: -15px -4px 0px 0px rgba(162, 162, 162, 0.68);
        box-shadow: -15px -4px 0px 0px rgba(162, 162, 162, 0.68);
        width: 250px;
        z-index: 1;
        @media (max-width: 930px) {
          max-width: 190px;
          left: 60px;
          top: -20px;
        }
        @media (max-width: 625px) {
          -webkit-box-shadow: 12px 6px 0px 1px rgba(162, 162, 162, 0.68);
          box-shadow: 12px 6px 0px 1px rgba(162, 162, 162, 0.68);
        }
      }
      .image2 {
        position: absolute;
        top: -100px;
        right: 90px;
        border-radius: 50%;
        -webkit-box-shadow: 14px 14px 0px 0px rgba(162, 162, 162, 0.68);
        box-shadow: 14px 14px 0px 0px rgba(162, 162, 162, 0.68);
        width: 250px;
        z-index: 1;
        @media (max-width: 930px) {
          max-width: 190px;
          right: 60px;
          top: -20px;
        }
        @media (max-width: 625px) {
          -webkit-box-shadow: 4px 13px 0px 1px rgba(162, 162, 162, 0.68);
          box-shadow: 4px 13px 0px 1px rgba(162, 162, 162, 0.68);
        }
      }
      .image3 {
        -webkit-box-shadow: -13px 14px 0px 0px rgba(162, 162, 162, 0.68);
        box-shadow: -13px 14px 0px 0px rgba(162, 162, 162, 0.68);
        @media (max-width: 625px) {
          -webkit-box-shadow: -5px 6px 0px 4px rgba(162, 162, 162, 0.68);
          box-shadow: -5px 6px 0px 4px rgba(162, 162, 162, 0.68);
        }
      }
    }

    .circle1 {
      position: absolute;
      top: 50px;
      right: 40%;
      background: #ecd856;
      clip-path: circle(50%);
      height: 5em;
      width: 5em;
      z-index: 0;
      @media (max-width: 625px) {
        height: 3em;
        width: 3em;
        top: 35%;
        left: 5%;
      }
    }
    .circle2 {
      border-bottom-left-radius: 20em;
      border-bottom-right-radius: 20em;
      border: 100px solid #ecd856;
      border-bottom: 0;
      top: 0;
      left: 15%;
      position: absolute;
      z-index: 0;
      @media (max-width: 625px) {
        border: 0;
        background: #ecd856;
        clip-path: circle(50%);
        height: 9em;
        width: 9em;
        top: 5%;
        left: 5%;
      }
    }
    .circle3 {
      border-top-left-radius: 5em;
      border-top-right-radius: 5em;
      border: 80px solid #ecd856;
      border-bottom: 0;
      bottom: 0;
      left: 35%;
      position: absolute;
      z-index: 0;
      @media (max-width: 625px) {
        border: 0;
        background: #ecd856;
        clip-path: circle(50%);
        height: 9em;
        width: 9em;
        top: 0;
        left: 50%;
      }
    }
    .hello-content {
      max-width: 700px;
      width: 100%;
      overflow-wrap: anywhere;
      z-index: 2;
      position: absolute;
      top: 45%;
      padding-right: 20px;
      @media (max-width: 1366px) {
        max-width: 620px;
      }
      @media (max-width: 1280px) {
        max-width: 450px;
      }
      @media (max-width: 1024px) {
        max-width: 400px;
      }
      @media (max-width: 930px) {
        max-width: 350px;
      }
      @media (max-width: 750px) {
        max-width: 250px;
      }
      @media (max-width: 625px) {
        top: 52%;
        left: 5%;
        max-width: 90%;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        border: none;
        box-shadow: 1px 1px 12px rgb(233 233 233);
        transition: all 0.5s;
        padding: 20px 40px;
      }
    }
    .first-content {
      @media (max-width: 625px) {
        padding: 20px 30px;
      }
    }
    .first-content,
    .third-content {
      text-align: left;
      right: 0;
    }
    .third-content {
      text-align: right;
      right: 5%;
    }
    .second-content {
      left: 5%;
      padding-left: 20px;
      text-align: left;
      @media (max-width: 625px) {
        top: 52%;
        max-width: 90%;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        border: none;
        box-shadow: 1px 1px 12px rgb(233 233 233);
        transition: all 0.5s;
        padding: 20px 40px;
      }
    }
  }
}
</style>
