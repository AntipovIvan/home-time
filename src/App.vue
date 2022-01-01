<template>
  <div class="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Hiragino Kaku Gothic Std";
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
</style>
