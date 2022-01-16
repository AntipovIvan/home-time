<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <router-link :to="{ name: 'Home' }"
          ><img src="@/assets/logo.png" alt=""
        /></router-link>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li class="li2">
          <router-link class="link" :to="{ name: 'List' }"
            >サービス紹介</router-link
          >
        </li>
        <li class="li3">
          <router-link class="link" :to="{ name: 'Chatroom' }"
            >チャットルム</router-link
          >
        </li>
        <li class="li4">
          <router-link class="link" :to="{ name: 'About' }"
            >お問い合わせ</router-link
          >
        </li>
      </ul>
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="far fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <hr />
          <li class="li1">
            <router-link class="link" :to="{ name: 'Home' }"
              >トップページ</router-link
            >
          </li>
          <hr />
          <li class="li2">
            <router-link class="link" :to="{ name: 'About' }"
              >お問い合わせ</router-link
            >
          </li>
          <hr />
          <li class="li3">
            <router-link class="link" :to="{ name: 'Chatroom' }"
              >チャットルム</router-link
            >
          </li>
          <hr />
          <li class="li4">
            <router-link class="link" :to="{ name: 'List' }"
              >サービス紹介</router-link
            >
          </li>
          <hr />
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      scrolledNav: false,
      mobile: false,
      mobileNav: false,
      windowsWidth: false,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    document.addEventListener("click", this.close);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.mobileNav = false;
      }
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
      return;
    },

    checkScreen() {
      this.windowsWidth = window.innerWidth;
      if (this.windowsWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #457b9d;
  z-index: 15;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: white;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    .li2 {
      background: url("../assets/listPC.png") 0 40% no-repeat no-repeat;
      background-size: 30px 30px;
      padding-left: 50px;
    }
    .li3 {
      background: url("../assets/chatroomPC.png") 0 40% no-repeat no-repeat;
      background-size: 30px 30px;
      padding-left: 50px;
    }
    .li4 {
      background: url("../assets/contactusPC.png") 0 40% no-repeat no-repeat;
      background-size: 30px 30px;
      padding-left: 50px;
    }

    ul,
    .link {
      font-weight: 500;
      color: white;
      list-style: none;
      text-decoration: none;
      &:active {
        text-decoration: double;
        border-color: rgb(255, 255, 255);
      }
    }

    li {
      text-transform: uppercase;
      padding: 16px;
    }

    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      border-bottom: 3px solid transparent;
      &:hover {
        color: rgb(255, 255, 255);
        border-color: rgb(255, 255, 255);
      }
    }

    .branding {
      display: flex;
      align-items: center;
      img {
        width: 210px;
        transition: 0.5s ease all;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;
      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }
    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 280px;
      height: 100%;
      background-color: #edf6ff;
      top: 0;
      left: 0;

      .link-sort {
        margin: 20px 20px;
        text-align: center;
        transition: 0.5s ease all;
        img {
          padding: 10px;
          height: 50%;
          width: 40%;
        }
      }

      li {
        margin-left: 20%;
        padding-bottom: 10px;
        padding-top: 10px;
        .link {
          color: #000000;
        }
      }

      hr {
        border: 1px solid #457b9d;
        margin-left: -30px;
        &:first-child {
          margin-top: 30%;
        }
      }

      .li1 {
        background: url("../assets/homepage.png") 1% 40% no-repeat no-repeat;
        padding-left: 50px;
      }
      .li2 {
        background: url("../assets/contactus.png") 1% 40% no-repeat no-repeat;
        padding-left: 50px;
      }
      .li3 {
        background: url("../assets/chatroom.png") 1% 40% no-repeat no-repeat;
        padding-left: 50px;
      }
      .li4 {
        background: url("../assets/list.png") 1% 40% no-repeat no-repeat;
        padding-left: 50px;
      }
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background-color: #457b9d;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    padding: 8px 0;

    .branding {
      img {
        widows: 40px;
      }
    }
  }
}
</style>
