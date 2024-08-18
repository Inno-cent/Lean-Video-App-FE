
<template>
  <router-view />
</template>


<script >
import Home from "./views/home/index.vue";
export default {
  name: "main",
  components: {
    Home,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main";
</style>
