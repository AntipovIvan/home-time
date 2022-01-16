<template>
  <span class="go-back">
    <button @click="goBack">&#10140;</button>
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.go-back {
  display: flex;
  cursor: pointer;
  position: absolute;
  top: 100px;
  left: 20px;
  @media screen and (max-width: 750px) {
    top: 80px;
  }
}
button {
  font-size: 35px;
  line-height: 25px;
  width: 1.3em;
  height: 1.3em;
  cursor: pointer;
  transform: rotate(180deg);
  color: rgb(255, 255, 255);
  background-color: #457b9d;
  border: 2px solid white;
  border-radius: 50%;
  button:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  @media screen and (max-width: 750px) {
    font-size: 25px;
    line-height: 25px;
  }
}
</style>
