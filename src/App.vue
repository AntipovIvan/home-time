<template>
  <div class="app">
    <Navigation />
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
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
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
