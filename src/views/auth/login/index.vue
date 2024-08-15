<template>
  <div class="login-container">
    <div class="image-section">
      <img src="@/assets/images/login.png" alt="Login Image" />
    </div>
    <div class="form-section">
      <div class="form--head-text">
        <h1>Welcome Back!</h1>
        <p>Please enter your details to login.</p>
      </div>
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      // Handle login logic here
    },
  },
};
</script>
  
  <style lang="scss">
@import "./index.scss";
</style>/