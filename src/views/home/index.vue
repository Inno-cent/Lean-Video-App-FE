<template>
  <div class="landing--page--container">
    <div class="landing--page--inner">
      <div class="section">
        <div class="header--comp--wrapper">
          <Header />
        </div>
        <div class="main--head--text--wrapper">
          <div class="head--text--innner">
            <div class="head--text--content">
              <h2>One platform. Limitless connection.</h2>
            </div>
            <div class="sub--head--text">
              <p>
                Whether you are on your phone, tablet, or computer, experience
                seamless calls across all your devices. No complicated setup or
                configuration - just connect and go.
              </p>
            </div>
            <div class="main--head--button--wrapper">
              <button>Get started for free</button>
            </div>
          </div>

          <!-- <div class="main--bg--image"> -->
            <div class="image--inner--wrapper">
              <img src="../../assets/images/bg.svg" alt="bg-image">
            </div>
          <!-- </div> -->
        </div>
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