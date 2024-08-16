<template>
  <div class="about--page--container">
    <div class="about--page--inner">
      <div class="header">
        <Header :isLightMode="true" />
      </div>
      <div class="about--section--one">
        <div class="main--head--text--wrapper">
          <div class="head--text--innner">
            <div class="head--text--content">
              <h4>Who We Are</h4>
            </div>
            <div class="sub--head--text">
              <p>
                At LeanVideo we believe that communication should be simple,
                seamless, and accessible to everyone, everywhere. Founded by a
                passionate team of innovators, we set out to revolutionize the
                way people connect across the globe, bringing you closer to the
                people who matter most
              </p>
            </div>
          </div>

          <!-- <div class="main--bg--image"> -->
          <div class="image--inner--wrapper">
            <img src="../../assets/images/aboutimage.png" alt="bg-image" />
          </div>
          <!-- </div> -->
        </div>
      </div>

      
        <section class="contact--section--container">
          <div class="contact--section">
            <div class="contact--section--inner">
              <div class="part--contact">
                <div class="left--head--text">
                  <h4>Get in Touch</h4>
                  <p>
                    Feel free to get in touch with us through our contact
                    channels, and we'll be prompt in addressing your needs. Your
                    satisfaction and clarity are our priorities, and we look
                    forward to connecting with you soon
                  </p>
                </div>
              </div>
              <div class="part--contact">
                <div class="double--input">
                  <div class="input first">
                    <input type="text" name="" id="" placeholder="Firstname" />
                  </div>
                  <div class="input">
                    <input type="text" name="" id="" placeholder="Lastname" />
                  </div>
                </div>

                <div class="double--input">
                  <div class="input first">
                    <input type="text" name="" id="" placeholder="Email" />
                  </div>
                  <div class="input">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Phonenumber"
                    />
                  </div>
                </div>

                <div class="textarea-wrap">
                  <textarea
                    class="textarea"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Description"
                  ></textarea>
                </div>

                <div class="main--head--button--wrapper info">
                  <button class="info--btn">Submit your information</button>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  </div>
</template>


<script>
import Header from '@components/header/index.vue';
import Connect from '../../components/connectsection/index.vue';
import Footer from '@components/footer/index.vue';
export default {
  name: 'FAQ',
  data() {},
  components: {
    Header,
    Footer,
    Connect,
  },
};
</script>
  
  <style lang="scss">
@import './index.scss';
</style>