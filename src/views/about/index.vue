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

      <section class="mission--section--container">
        <div class="mission--section">
          <div class="mission--section--inner">
            <div class="part--mission">
              <div class="left--head--text">
                <h4>Our Mission</h4>
                <p>
                  At LeanVideo App, our mission is to eliminate barriers in
                  communication by offering a high-quality, reliable platform
                  that makes connecting effortless. Whether you’re engaging in
                  personal or professional conversations, we ensure that every
                  interaction feels as authentic as being face-to-face.<br />
                  We prioritize simple, accessible communication that bridges
                  distances. By focusing on clarity, security, and ease of use,
                  [App Name] empowers you to stay connected with the people and
                  moments that matter most, wherever you are.
                </p>
              </div>
            </div>
            <div class="part--mission img">
              <div class="mission">
                <img src="../../assets/images/worldimage.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mission--section--container light">
        <div class="mission--section">
          <div class="mission--section--inner vision">
            <div class="part--mission">
              <div class="left--head--text light">
                <h4>Our Vision</h4>
                <p>
                  We envision a world where distance is no longer an obstacle to
                  meaningful connections. At LeanVideo App, our goal is to
                  redefine digital communication by creating a platform that
                  brings people closer together, no matter where they are.<br />
                  As we continue to innovate, we aim to set a new standard in
                  how people connect, fostering relationships and collaboration
                  that transcend borders. We are committed to building a future
                  where every conversation feels as natural and vibrant as being
                  in the same room.
                </p>
              </div>
            </div>
            <div class="part--mission">
              <div class="mission">
                <img src="../../assets/images/visionimage.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="team--container">
        <div class="section">
          <div class="works--conatiner">
            <h1 class="landing--header">Meet Our Team</h1>
            <p class="landing--subtext">
              Discover the dedicated experts shaping the future of seamless,
              global communication with their passion and expertise
            </p>
          </div>
          <div class="we34r">
            <div class="wetgf4f">
              <!-- <div class="box">

                <div class="image--wrapper">
                  <img src="../../assets/images/team.png" alt="profile" />
                </div>
                <div class="box--text">
                  <div class="main--text">
                    <h3>Alex Johnson</h3>
                    <p>Founder & CEO</p>
                  </div>
                </div>
              </div>

              <div class="box">
                <div class="image--wrapper">
                  <img src="../../assets/images/team.png" alt="profile" />
                </div>
                <div class="box--text">
                  <div class="main--text">
                    <h3>Alex Johnson</h3>
                    <p>Founder & CEO</p>
                  </div>
                </div>
              </div>

              <div class="box">
                <div class="image--wrapper">
                  <img src="../../assets/images/team.png" alt="profile" />
                </div>
                <div class="box--text">
                  <div class="main--text">
                    <h3>Alex Johnson</h3>
                    <p>Founder & CEO</p>
                  </div>
                </div>
              </div> -->

             
             
            </div>
          </div>
        </div>
      </div>

      <section class="section">
        <Connect />
      </section>

      <section class="section">
        <Footer />
      </section>
    </div>
  </div>
</template>


<script>
import Header from '@components/header/index.vue';
import Connect from '../../components/connectsection/index.vue';
import Footer from '@components/footer/index.vue';

export default {
  name: 'About',
  data() {
    return {
      boxes: [
        {
          name: 'Alex Johnson',
          position: 'Founder & CEO',
          image: '../../assets/images/team.png',
          alt: 'profile',
        },
        {
          name: 'Jane Doe',
          position: 'COO',
          image: '../../assets/images/team.png',
          alt: 'profile',
        },
        {
          name: 'Jane Doe',
          position: 'COO',
          image: '../../assets/images/team.png',
          alt: 'profile',
        },
        {
          name: 'Jane Doe',
          position: 'COO',
          image: '../../assets/images/team.png',
          alt: 'profile',
        },
        {
          name: 'Jane Doe',
          position: 'COO',
          image: '../../assets/images/team.png',
          alt: 'profile',
        },
        {
          name: 'Jane Doe',
          position: 'COO',
          image: '../../assets/images/team.png',
          alt: 'profile',
        },
      ],
     
    };
  },
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