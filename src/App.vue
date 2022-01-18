<template>
  <div class="app">
    <Navigation />
    <router-view v-slot="{ Component }">
      <transition name="scale-slide">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: "App",
  components: { Navigation },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Hiragino Kaku Gothic ProN";
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: #edf6ff;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
.scale-slide-enter-active,
.scale-slide-leave-active {
  transition: all 0.85s ease;
}

.scale-slide-enter-from {
  left: -100%;
}

.scale-slide-enter-to {
  left: 0%;
}

.scale-slide-leave-from {
  transform: scale(1);
}

.scale-slide-leave-to {
  transform: scale(0.8);
}
</style>
