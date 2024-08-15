<template>
  <div class="login-container">
    <div class="image-section">
      <img src="@/assets/images/signin.png" alt="signup Image" />
    </div>
    <div class="form-section">
      <div class="form--head-text">
        <h1>Create Your Account</h1>
        <p>Create a free account in seconds. No hassle.</p>
      </div>
      <form @submit.prevent="login">
        <div class="input-group">
          <Input
            label="Email"
            placeholder="Email"
            icon="M19 0.5H1C0.801088 0.5 0.610322 0.579018 0.46967 0.71967C0.329018 0.860322 0.25 1.05109 0.25 1.25V14C0.25 14.3978 0.408035 14.7794 0.68934 15.0607C0.970644 15.342 1.35218 15.5 1.75 15.5H18.25C18.6478 15.5 19.0294 15.342 19.3107 15.0607C19.592 14.7794 19.75 14.3978 19.75 14V1.25C19.75 1.05109 19.671 0.860322 19.5303 0.71967C19.3897 0.579018 19.1989 0.5 19 0.5ZM10 8.48281L2.92844 2H17.0716L10 8.48281ZM7.25406 8L1.75 13.0447V2.95531L7.25406 8ZM8.36406 9.01719L9.48906 10.0531C9.62743 10.1801 9.80842 10.2506 9.99625 10.2506C10.1841 10.2506 10.3651 10.1801 10.5034 10.0531L11.6284 9.01719L17.0659 14H2.92844L8.36406 9.01719ZM12.7459 8L18.25 2.95438V13.0456L12.7459 8Z"
          />
        </div>
        <div class="input-group">
          <Input
            label="Password"
            placeholder="Password"
            :iconWidth="18"
            :iconHeight="22"
            icon="M16.5 7H13.5V4.75C13.5 3.55653 13.0259 2.41193 12.182 1.56802C11.3381 0.724106 10.1935 0.25 9 0.25C7.80653 0.25 6.66193 0.724106 5.81802 1.56802C4.97411 2.41193 4.5 3.55653 4.5 4.75V7H1.5C1.10218 7 0.720644 7.15804 0.43934 7.43934C0.158035 7.72064 0 8.10218 0 8.5V19C0 19.3978 0.158035 19.7794 0.43934 20.0607C0.720644 20.342 1.10218 20.5 1.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V8.5C18 8.10218 17.842 7.72064 17.5607 7.43934C17.2794 7.15804 16.8978 7 16.5 7ZM6 4.75C6 3.95435 6.31607 3.19129 6.87868 2.62868C7.44129 2.06607 8.20435 1.75 9 1.75C9.79565 1.75 10.5587 2.06607 11.1213 2.62868C11.6839 3.19129 12 3.95435 12 4.75V7H6V4.75ZM16.5 19H1.5V8.5H16.5V19ZM10.125 13.75C10.125 13.9725 10.059 14.19 9.9354 14.375C9.81179 14.56 9.63608 14.7042 9.43052 14.7894C9.22495 14.8745 8.99875 14.8968 8.78052 14.8534C8.56229 14.81 8.36184 14.7028 8.2045 14.5455C8.04717 14.3882 7.94002 14.1877 7.89662 13.9695C7.85321 13.7512 7.87549 13.525 7.96064 13.3195C8.04578 13.1139 8.18998 12.9382 8.37498 12.8146C8.55999 12.691 8.7775 12.625 9 12.625C9.29837 12.625 9.58452 12.7435 9.79549 12.9545C10.0065 13.1655 10.125 13.4516 10.125 13.75Z"
          />
        </div>

        <div class="der3er">
          <div class="bottom--text--container">
            <div class="remember--text--inner">
              <div class="check-box-wrapper">
                <input type="checkbox" name="remember-me" id="" />
              </div>
              <div class="remember--text">I Agree with terms & condition</div>
            </div>
           
          </div>
        </div>
        <button type="submit">Log in</button>
        <div class="divider">
          <span class="divider-text">Or</span>
        </div>
        <div class="google-signup--wrapper">
          <div class="inner">
            <div class="inner--container">
              <div class="logo">
                <img src="../../../assets/images/Google.png" alt="" />
              </div>
              <div class="text">Continue with Google</div>
            </div>
          </div>
        </div>
        <div class="d34rgfd">
          <div class="acct--text">Don’t have an account? Create an account</div>
        </div>
      </form>
    </div>
  </div>
</template>
    
    <script>
import Input from "@components/input/index.vue";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    Input,
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
@import "../index.scss";
</style>/