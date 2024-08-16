<template>
    <div class="accordion">
      <div v-for="(item, index) in items" :key="index" class="accordion-item">
        <div class="accordion-header" @click="toggle(index)">
          <h3>{{ item.title }}</h3>
          <span :class="{'active': activeIndex === index}">{{ activeIndex === index ? '-' : '+' }}</span>
        </div>
        <div v-if="activeIndex === index" class="accordion-content">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        activeIndex: null,
      };
    },
    methods: {
      toggle(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
@import "./index.scss"
  </style>
  