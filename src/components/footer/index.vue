<template>
    <footer class="footer-container">
      <!-- Part 1 -->
      <div class="footer-part">
        <h3>About Us</h3>
        <p>We are a company committed to providing the best services.</p>
      </div>
  
      <!-- Part 2 -->
      <div class="footer-part">
        <h3>Page</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
  
      <!-- Part 3 -->
      <div class="footer-part">
        <h3>Support</h3>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
  
      <!-- Part 4 -->
      <div class="footer-part social-media">
        <h3>Find Us</h3>
        <div class="social-icons">
          <a href="#"><img src="path/to/facebook-icon.svg" alt="Facebook" /></a>
          <a href="#"><img src="path/to/twitter-icon.svg" alt="Twitter" /></a>
          <a href="#"><img src="path/to/instagram-icon.svg" alt="Instagram" /></a>
          <a href="#"><img src="path/to/linkedin-icon.svg" alt="LinkedIn" /></a>
        </div>
      </div>
    </footer>
  </template>

  <script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>