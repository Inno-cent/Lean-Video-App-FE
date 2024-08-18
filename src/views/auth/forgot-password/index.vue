<template>
  <div class="er34esd">
    <div class="forget--password--container">
      <div class="forgot--inner--wrapper">
        <div class="wee23e">
          <div class="header--twxt">
            <h1>Forget-password</h1>
            <p>Please enter your email address to reset your password</p>
          </div>
          <div class="reset--input--wrapper">
            <Input label="Email" placeholder="Email" />
          </div>
          <div class="reset--btn-wrap">
            <button class="reset--button">Send reset link</button>
          </div>
        </div>
        <div class="d34rgfd2">
          <div class="acct--textq">
           Have your password? <span> Log in</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@components/input/index.vue";
export default {
  name: "Forgot-password",
  data() {
    return {};
  },
  components: {
    Input,
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>