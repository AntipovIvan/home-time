<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
</style>
