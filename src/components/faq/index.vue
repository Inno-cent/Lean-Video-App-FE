<template>
  <div class="faq--inner">
    <div class="faq--left">
      <div class="faq--left__text">
        <h4>NeedHelp</h4>
        <p>
          Get quick solutions and answers to common questions about using our
          video calling app efficiently
        </p>
      </div>
      <div class="faq--left__image">
        <img src="@assets/images/faq.png" alt="" />
      </div>
    </div>
    <div class="faq--right">
      <div class="faq--right--header">
        <h4>FAQ'S</h4>
      </div>
      <div class="accordion--section--wrapper">
        <Accordion :items="accordionItems" />
      </div>
    </div>
  </div>
</template>
<script>
import Accordion from '@components/accordion/index.vue';
export default {
  components: {
    Accordion,
  },
  data() {
    return {
      accordionItems: [
        {
          title: 'How do I start a video call?',
          content:
            'Select a contact from your list and click the video call icon to initiate the call immediately.',
        },
        {
          title: 'Can I use the app on multiple devices?',
          content: 'This is the content for item 2.',
        },
        {
          title: 'Is my video call secure?',
          content: 'This is the content for item 3.',
        },
        {
          title: 'How do I add contacts?',
          content: 'This is the content for item 4.',
        },
        {
          title: 'What should I do if I encounter connection issues?',
          content: 'This is the content for item 5.',
        },
        // Add more items dynamically
      ],
    };
  },
};
</script>
<style lang="scss">
@import '../../components/faq/index.scss';
</style>/