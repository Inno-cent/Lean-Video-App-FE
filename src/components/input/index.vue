<template>
  <div class="input-wrapper">
    <label v-if="label">{{ label }}</label>
    <div class="input-container">
      <input :placeholder="placeholder" />
      <div class="icon" v-if="icon">
        <img :src="icon" alt="Icon" />
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Enter text here...",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>/