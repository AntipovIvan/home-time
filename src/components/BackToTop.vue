<template>
  <transition name="back-to-top-fade">
    <div
      class="vue-back-to-top"
      :style="`bottom:${this.bottom};`"
      v-show="visible"
      @click="backToTop"
    >
      <slot>
        <div class="default">
          <span>
            <svg
              class="svg-icon"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M857.4 615c-6.4 0-12.8-2.4-17.7-7.3L526 294c-3.8-3.8-8.7-5.8-14-5.8-5.3 0-10.3 2.1-14 5.8L184.3 607.6c-9.8 9.8-25.6 9.8-35.4 0-9.8-9.8-9.8-25.6 0-35.4l313.7-313.7c27.2-27.2 71.6-27.2 98.8 0l313.7 313.7c9.8 9.8 9.8 25.6 0 35.4-4.9 4.9-11.3 7.4-17.7 7.4z"
              />
              <path
                d="M512 935.2c-13.8 0-25-11.2-25-25v-647c0-13.8 11.2-25 25-25s25 11.2 25 25v647.1c0 13.7-11.2 24.9-25 24.9zM781.9 198H242.1c-13.8 0-25-11.2-25-25s11.2-25 25-25H782c13.8 0 25 11.2 25 25s-11.3 25-25.1 25z"
              />
            </svg>
          </span>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BackToTop",
  props: {
    text: {
      type: String,
      default: "Top",
    },
    visibleoffset: {
      type: [String, Number],
      default: 200,
    },
    visibleoffsetbottom: {
      type: [String, Number],
      default: 0,
    },
    scrollFn: {
      type: Function,
      // eslint-disable-next-line no-unused-vars
      default: function (eventObject) {},
    },
  },
  data() {
    return {
      visible: false,
      right: String,
      bottom: String,
    };
  },
  mounted() {
    window.smoothscroll = () => {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll);
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5));
      }
    };
    window.addEventListener("scroll", this.catchScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.catchScroll);
  },
  methods: {
    catchScroll() {
      const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset);
      const pastBottomOffset =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - parseInt(this.visibleoffsetbottom);
      this.visible =
        parseInt(this.visibleoffsetbottom) > 0
          ? pastTopOffset && !pastBottomOffset
          : pastTopOffset;
      this.scrollFn(this);
    },

    backToTop() {
      window.smoothscroll();
      this.$emit("scrolled");
    },
  },
};
</script>

<style lang="scss" scoped>
.back-to-top-fade-enter-active,
.back-to-top-fade-leave-active {
  transition: opacity 0.7s;
}
.back-to-top-fade-enter,
.back-to-top-fade-leave-to {
  opacity: 0;
}

.vue-back-to-top {
  cursor: pointer;
  position: fixed;
  z-index: 1000;
  @media (min-width: 500px) {
    right: 30px;
    bottom: 140px;
  }
  @media (max-width: 500px) {
    left: 20px;
    bottom: 200px;
  }
}

.vue-back-to-top .default {
  background-color: #e63946;
  border-radius: 50%;
  color: #ffffff;
  height: 60px;
  line-height: 50px;
  text-align: center;
  width: 70px;
  @media (max-width: 625px) {
    height: 45px;
    width: 55px;
    line-height: 45px;
  }
}

.vue-back-to-top .default span {
  color: #ffffff;
}

.vue-back-to-top--is-footer {
  bottom: 50% !important;
  position: absolute;
  transform: translateY(50%);
}
.svg-icon {
  width: 2.5em;
  height: 2.5em;
  vertical-align: middle;
  fill: #ffffff;
  color: white;
  overflow: hidden;
  @media (max-width: 625px) {
    width: 1.9em;
    height: 1.9em;
  }
}
</style>
