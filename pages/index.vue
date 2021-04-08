<template>
  <div>
    <!-- <div class="header-dimmer"></div> -->
    <Navbar />
    <section>
      <FeaturedTitle />
      <VideoGitHubIntegrated />
      <VideoCreateBounty />
      <div class="wave wave-bottom"></div>
      <VideoClaimBounty />
      <div class="roadmap-container">
        <Roadmap />
      </div>
      <!-- <client-only><MailchimpSignup /></client-only> -->
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedTitle from "../components/FeaturedTitle";
import Roadmap from "../components/Roadmap";
import VideoClaimBounty from "../components/VideoClaimBounty";
import VideoCreateBounty from "../components/VideoCreateBounty";
import VideoGitHubIntegrated from "../components/VideoGitHubIntegrated";
import MailchimpSignup from "../components/MailchimpSignup.vue";

export default {
  components: {
    Navbar,
    FeaturedTitle,
    Footer,
    VideoClaimBounty,
    VideoCreateBounty,
    VideoGitHubIntegrated,
    Roadmap,
    MailchimpSignup
  },
  data() {
    return {
      rellax: {
        breakpoints: [768, 768, 1201],
        wrapper: "body",
        relativeToWrapper: true
      }
    };
  }
};
/* setTimeout(() => {
  var rellax = new Rellax(".rellax", {
    breakpoints: [768, 768, 1201],
  });
}, 1000); */
</script>

<style>
@import "~/assets/css/landing.css";
@import "~/assets/css/landing-mobile.css";
</style>
