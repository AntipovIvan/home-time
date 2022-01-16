<template>
  <section class="chat-section">
    <div>
      <div class="app-container" :class="{ 'app-mobile': isDevice }">
        <chat-container
          v-if="showChat"
          :current-user-id="currentUserId"
          :is-device="isDevice"
          @show-demo-options="showDemoOptions = $event"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ChatContainer from "@/components/ChatContainer";

export default {
  components: {
    ChatContainer,
  },

  data() {
    return {
      showChat: true,
      currentUserId: "6R0MijpK6M4AIrwaaCY2",
      isDevice: false,
      showDemoOptions: true,
      updatingData: false,
    };
  },

  computed: {},

  watch: {},

  mounted() {
    this.isDevice = window.innerWidth < 500;
    window.addEventListener("resize", (ev) => {
      if (ev.isTrusted) this.isDevice = window.innerWidth < 500;
    });
  },

  methods: {},
};
</script>

<style lang="scss">
.chat-section {
  padding-top: 95px;

  .vac-card-window {
    height: calc(100vh - 95px) !important;
  }
  .vac-col-messages .vac-room-empty div {
    display: none;
  }
  .vac-col-messages .vac-container-scroll {
    background-color: #edf6ff;
  }
  .vac-col-messages .vac-text-started {
    display: none;
    @media (max-width: 768px) {
      display: none !important;
    }
  }
  .vac-col-messages .vac-box-footer {
    background-color: #edf6ff;
  }
  .vac-message-wrapper .vac-message-container {
    margin-top: 30px;
  }
  .vac-box-search {
    background-color: #edf1f3;
    #vac-icon-add {
      fill: #e63946;
    }
  }
  .vac-rooms-container .vac-room-selected {
    background: none !important;
  }
  input {
    -webkit-appearance: none;
  }

  .app-mobile {
    padding: 0;
    select {
      margin: 10px 0;
    }
  }

  select {
    height: 20px;
    outline: none;
    border: 1px solid #e0e2e4;
    border-radius: 4px;
    background: #fff;
    margin-bottom: 20px;
  }

  .button-theme {
    float: right;
    display: flex;
    align-items: center;

    button {
      color: #fff;
      outline: none;
      cursor: pointer;
      border-radius: 4px;
      padding: 6px 12px;
      margin-left: 10px;
      border: none;
      font-size: 14px;
      transition: 0.3s;
      vertical-align: middle;

      &:hover {
        opacity: 0.8;
      }

      &:active {
        opacity: 0.6;
      }

      @media only screen and (max-width: 768px) {
        padding: 3px 6px;
        font-size: 13px;
      }
    }
  }
}
</style>

<style lang="scss" scoped></style>
