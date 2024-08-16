<template>
  <div class="faq--page--container">
    <div class="faq--page--container__inner">
      <div class="header--wrapper">
        <Header :isLightMode="true" />
      </div>

      <section class="faq--section">
        <!-- <div class="faq--top--text"></div> -->
        <div class="faq--section--container">
          <FAQ />
        </div>
      </section>

      <section class="section">
        <Connect />
      <!-- </section> -->

      <section class="section">
        <Footer />
      </section>
    </div>
  </div>
</template>


<script>
import Header from '@components/header/index.vue';
import Connect from '../../components/connectsection/index.vue';
import FAQ from '@components/faq/index.vue';
import Footer from '@components/footer/index.vue';
export default {
  name: 'Home',
  data() {},
  components: {
    Header,
    Footer,
    FAQ,
    Connect,
  },
};
</script>