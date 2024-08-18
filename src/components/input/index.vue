<template>
  <div class="input-wrapper">
    <label v-if="label">{{ label }}</label>
    <div class="input-container">
      <input :placeholder="placeholder" />
      <div class="icon" v-if="icon">
        <svg
         :width="iconWidth"
          :height="iconHeight"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            :d="icon"
            fill="#1B263B"
          />
        </svg>
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
    iconWidth: {
      type: Number,
      default: 20, // Default width for the SVG icon
    },
    iconHeight: {
      type: Number,
      default: 20, // Default height for the SVG icon
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>/