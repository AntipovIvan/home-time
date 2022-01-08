<template>
  <h2>404</h2>
  <h3>Not Found</h3>
  <Footer />
</template>

<script>
import Footer from "@/components/helpers/Footer.vue";
export default {
  components: { Footer },
};
</script>

<style lang="scss" scoped>
* {
  min-height: 30vh;
}
h2 {
  padding-top: 150px;
  text-align: center;
  margin-bottom: 150px;
}
h3 {
  text-align: center;
}
</style>
