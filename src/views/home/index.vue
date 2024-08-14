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
            <img src="../../assets/images/bg.svg" alt="bg-image" />
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>

    <div class="section">
      <div class="info--container">
        <div class="left--info">
          <div class="left--info__header">
            <h2>Crystal Clear Communication</h2>
          </div>
          <div class="left--info__sub">
            <p>
              Experience high-definition video and audio quality that makes
              every conversation feel like you're in the same room. Our advanced
              adaptive streaming technology ensures crystal-clear communication,
              even in less-than-ideal network conditions. Say goodbye to
              pixelated faces and choppy audio
            </p>
          </div>
          <div class="main--head--button--wrapper">
              <button>Get started for free</button>
            </div>
        </div>
        <div class="right-info">
        <div class="image--wrap">
          <img src="../../assets/images/info.png" alt="info-img">
        </div>
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