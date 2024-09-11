<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="back-to-top">
        <router-link to="/">&#94; <br />Back to Top</router-link>
        <hr class="top-divider" />
      </div>

      <div class="footer-columns">
        <div class="column">
          <div class="column">
            <h4>Find Us</h4>
            <p>Phone: 123-456-7890</p>
            <p>Email: <a href="mailto:customer@example.com">customer@example.com</a></p>

            <h4>Our Apps</h4>
            <a href="https://apps.apple.com" target="blank">
              <img
                src="/public/images/AppsStore-Images/appstore-image.png"
                alt="Download on the App Store"
              />
            </a>
            <a href="https://play.google.com" target="blank">
              <img
                src="/public/images/AppsStore-Images/google-play-image.png"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
        <div class="column">
          <h4>Our History</h4>
          <p>Founded in 2018 by Kenya's most experienced travel planners.</p>
          <p>We have been featured in various travel magazines and publications.</p>
          <p>We have been awarded numerous awards and recognition.</p>
        </div>
        <div class="column">
          <h4>Credentials</h4>
          <p>We are regulated by the Traveling Tours and Licensing Board of Kenya.</p>
          <p>License No: 12345</p>
          <p>Sign up for our Newsletter and get the latests deals on our traveling destinations</p>
          <!--remember to add the sign up call to action here.-->
        </div>
      </div>
      <div class="social-media">
        <h4>Follow Us</h4>
        <!-- add the links to the social media -->
        <hr class="divider" />
        <a href="#"><img src="/public/images/Socials/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="/public/images/Socials/x-logo.png" alt="Twitter" /></a>
        <a href="#"><img src="/public/images/Socials/instagram.jpeg" alt="Instagram" /></a>
      </div>
      <hr class="divider" />
      <div class="footer-bottom">
        <p>&copy; 2024 Kennah-Tours LTD. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
