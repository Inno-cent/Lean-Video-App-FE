<template>
  <div class="landing--page--container">
    <div class="landing--page--inner">
      <div class="section">
        <Header />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@components/header/index.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>/