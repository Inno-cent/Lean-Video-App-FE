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
              <li
                :class="['header--list--item', { 'light-mode': isLightMode }]"
              >
                About
              </li>
            </div>
            <div class="menu--list">
              <li
                :class="['header--list--item', { 'light-mode': isLightMode }]"
              >
                Features
              </li>
            </div>
            <div class="menu--list">
              <li
                :class="['header--list--item', { 'light-mode': isLightMode }]"
              >
                Pricing
              </li>
            </div>
            <div class="menu--list">
              <li
                :class="['header--list--item', { 'light-mode': isLightMode }]"
              >
                Learn
              </li>
            </div>
            <div class="menu--list">
              <li
                :class="['header--list--item', { 'light-mode': isLightMode }]"
              >
                Get help
              </li>
            </div>
          </div>
        </div>

        <div class="header--auth--buttons">
          <div class="login">
            <li :class="['header--list--item', { 'light-mode': isLightMode }]">
              Log in
            </li>
          </div>
          <div class="sign-up">
            <button>Sign up</button>
          </div>

          <div :class="['hamburger', click ? 'open' : '']" @click="handleClick">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
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