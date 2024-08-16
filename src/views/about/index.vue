<template>
  <div class="about--page--container">
    <div class="about--page--inner">
      <div class="header">
        <Header :isLightMode="true" />
      </div>
      <div class="about--section--one">
        <div class="main--head--text--wrapper">
          <div class="head--text--innner">
            <div class="head--text--content">
              <h4>Who We Are</h4>
            </div>
            <div class="sub--head--text">
              <p>
                At LeanVideo we believe that communication should be simple,
                seamless, and accessible to everyone, everywhere. Founded by a
                passionate team of innovators, we set out to revolutionize the
                way people connect across the globe, bringing you closer to the
                people who matter most
              </p>
            </div>
          </div>

          <!-- <div class="main--bg--image"> -->
          <div class="image--inner--wrapper">
            <img src="../../assets/images/aboutimage.png" alt="bg-image" />
          </div>
          <!-- </div> -->
        </div>
      </div>

      <section class="mission--section--container">
        <div class="mission--section">
          <div class="mission--section--inner">
            <div class="part--mission">
              <div class="left--head--text">
                <h4>Our Mission</h4>
                <p>
                  At LeanVideo App, our mission is to eliminate barriers in
                  communication by offering a high-quality, reliable platform
                  that makes connecting effortless. Whether you’re engaging in
                  personal or professional conversations, we ensure that every
                  interaction feels as authentic as being face-to-face.<br />
                  We prioritize simple, accessible communication that bridges
                  distances. By focusing on clarity, security, and ease of use,
                  [App Name] empowers you to stay connected with the people and
                  moments that matter most, wherever you are.
                </p>
              </div>
            </div>
            <div class="part--mission">
             <div class="mission">
                <img src="../../assets/images/worldimage.png" alt="">
             </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import Header from '@components/header/index.vue';
import Connect from '../../components/connectsection/index.vue';
import Footer from '@components/footer/index.vue';
export default {
  name: 'FAQ',
  data() {},
  components: {
    Header,
    Footer,
    Connect,
  },
};
</script>
  
  <style lang="scss">
@import './index.scss';
</style>