<template>
  <hr />
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
hr {
  @media (max-width: 768px) {
    margin: 1rem 0 0.5rem 0;
    border: 3px solid #457b9d;
    opacity: 1;
  }
  @media (min-width: 768px) {
    display: none;
  }
}
</style>
