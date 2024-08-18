<template>
  <div class="faq--page--container">
    <div class="faq--page--container__inner">
      <div class="header--wrapper">
        <Header :isLightMode="true" />
      </div>

      <section class="faq--section">
        <div class="faq--top--text">
          <h3>NeedHelp</h3>
          <p>
            Get quick solutions and answers to common questions about using our
            video calling app efficiently
          </p>
        </div>
        <div class="faq--section--container">
          <FAQsection />
        </div>
      </section>

      <section class="section">
        <Connect />
      </section>

      <section class="section">
        <Footer />
      </section>
    </div>
  </div>
</template>


<script>
import Header from '@components/header/index.vue';
import Connect from '../../components/connectsection/index.vue';
import FAQsection from '@components/faq/index.vue';
import Footer from '@components/footer/index.vue';
export default {
  name: 'FAQ',
  data() {},
  components: {
    Header,
    Footer,
    FAQsection,
    Connect,
  },
};
</script>

<style lang="scss">
@import './index.scss';
</style>