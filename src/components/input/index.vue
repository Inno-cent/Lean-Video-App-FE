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