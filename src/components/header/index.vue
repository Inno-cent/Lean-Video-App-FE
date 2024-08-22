<template>
  <div :class="['header--wrapper', { 'light-mode': isLightMode }]">
    <header>
      <div class="header--inner">
        <div class="header--logo">
          <div class="logo--wrapper">
            <router-link to="/">
              <img
                v-if="!isLightMode"
                src="../../assets/images/Group 2.svg"
                alt="logo"
              />
              <img v-else src="../../assets/images/dark-logo.svg" alt="logo" />
            </router-link>
          </div>
        </div>

        <div class="header--menu">
          <div class="header--menu__inner">
            <div class="menu--list">
              <router-link to="/about">
                <li
                  :class="['header--list--item', { 'light-mode': isLightMode }]"
                >
                  About
                </li>
              </router-link>
            </div>
            <div class="menu--list">
              <router-link to="/">
                <li
                  :class="['header--list--item', { 'light-mode': isLightMode }]"
                >
                  Features
                </li>
              </router-link>
            </div>
            <div class="menu--list">
              <router-link to="/">
                <li
                  :class="['header--list--item', { 'light-mode': isLightMode }]"
                >
                  Pricing
                </li>
              </router-link>
            </div>
            <!-- <div class="menu--list">
              <router-link to="/">
                <li
                  :class="['header--list--item', { 'light-mode': isLightMode }]"
                >
                  Learn
                </li>
              </router-link>
            </div> -->
            <div class="menu--list">
              <router-link to="/">
                <li
                  :class="['header--list--item', { 'light-mode': isLightMode }]"
                >
                  Get help
                </li>
              </router-link>
            </div>
          </div>
        </div>

        <div class="header--auth--buttons">
          <div class="login">
            <router-link to="/login">
              <li
                :class="['header--list--item', { 'light-mode': isLightMode }]"
              >
                Log in
              </li>
            </router-link>
          </div>

          <div class="sign-up">
            <router-link to="../signup">
              <button>Sign up</button>
            </router-link>
          </div>

          <div :class="['hamburger', click ? 'open' : '']" @click="handleClick">
            <span :class="['line', { 'light-mode': isLightMode }]"></span>
            <span :class="['line', { 'light-mode': isLightMode }]"></span>
            <span :class="['line', { 'light-mode': isLightMode }]"></span>
          </div>
        </div>
      </div>
      <div class="nav--mobile">
        <nav :class="['nav-links', click ? 'active' : '']">
          <router-link to="/about" class="nav-link-item"> About </router-link>

          <router-link to="/" class="nav-link-item"> Features </router-link>

          <router-link to="/" class="nav-link-item"> Pricing </router-link>

          <router-link to="/" class="nav-link-item"> Get help </router-link>

          <router-link to="/login" class="nav-link-item"> Log in </router-link>

          <div class="sign-up-mobile">
            <router-link to="./signup">
              <button class="mobile">Sign up</button>
            </router-link>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      click: false,
    };
  },
  methods: {
    handleClick() {
      this.click = !this.click;
    },
  },
  props: {
    isLightMode: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


<style lang="scss">
@import './index.scss';
</style>/