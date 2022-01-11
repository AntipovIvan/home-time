<template>
  <section>
    <div class="about">
      <img src="../assets/otoiawasePC.png" alt="" class="img" />
      <div class="main">
        <div class="form">
          <form>
            <h4>お問い合わせ</h4>
            <input type="text" placeholder="私の名前" required v-model="text" />
            <input
              type="email"
              placeholder="メールアドレス"
              required
              v-model="email"
            />
            <input
              class="request-body"
              type="text"
              placeholder="これについて"
              required
              v-model="request"
            />
            <div class="terms">
              <input type="checkbox" v-model="terms" required />
              <label>Accept Terms and Conditions</label>
            </div>
          </form>
        </div>
        <div class="button-container">
          <router-link class="link" :to="{ name: 'List' }">
            <button class="btn btn-secondary">送信</button></router-link
          >
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Footer from "@/components/helpers/Footer.vue";
export default {
  name: "About",
  components: { Footer },
  data() {
    return {
      text: "",
      email: "",
      request: "",
      terms: false,
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 70px;
  @media screen and (max-width: 750px) {
    padding-top: 50px;
  }
  .about {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: flex-start;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
    .main {
      flex: 70%;
      max-width: 50%;
      padding: 10px 10px;
      background-color: #edf6ff;
      border: none;
      transition: all 0.5s;
      @media screen and (max-width: 886px) {
        margin-top: 15px;
      }
      @media screen and (max-width: 700px) {
        width: 100%;
        max-width: 100%;
      }

      .form {
        background-color: rgb(255, 255, 255);
        justify-content: center;
        text-align: center;
        max-width: 550px;
        max-height: 620px;
        margin: 20vh auto 20vh auto;
        padding: 20px;
        border-radius: 30px;
        ::placeholder {
          color: rgb(201, 201, 201);
          font-size: 16px;
        }
        @media screen and (max-width: 700px) {
          margin: 10px auto 100px auto;
        }
        h3 {
          line-height: 1.5em;
        }
        label {
          color: #aaa;
          display: inline-block;
          margin: 25px 0 15px;
          font-size: 0.6em;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: bold;
        }
        input,
        select {
          display: block;
          padding: 10px 6px;
          width: 100%;
          box-sizing: border-box;
          border: none;
          border-bottom: 1px solid #ddd;
          color: #555;
        }
        input[type="checkbox"] {
          display: inline-block;
          width: 16px;
          margin: 0 10px 0 0;
          position: relative;
          top: 2px;
        }
      }
      .button-container {
        text-align: center;
        margin-top: -70px;
      }

      .btn {
        display: inline-block;
        font-weight: 400;
        line-height: 1.5;
        text-align: middle;
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
        -webkit-box-shadow: 5px 9px 11px -2px rgba(162, 162, 162, 0.68);
        box-shadow: 5px 9px 11px -2px rgba(162, 162, 162, 0.68);
        background-image: url("../assets/submit-btn.png");
        background-repeat: no-repeat;
        background-position: left 10px center;
        background-size: 25%;
        width: 180px;
        height: 50px;
        border-radius: 30px;
        color: #fff;
        background-color: #e63946;
      }
    }
    .img {
      flex: 30%;
      max-width: 50%;
      height: auto;
      @media screen and (max-width: 700px) {
        width: 100%;
        max-width: 100%;
      }
    }
  }
}
</style>
