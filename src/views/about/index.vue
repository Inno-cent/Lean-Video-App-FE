<template>
  <div class="about--page--container">
    <div class="about--page--inner">
      <div class="header">
        <Header :isLightMode="true"/>
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