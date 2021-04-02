<template>
  <div>
    <div class="header-dimmer"></div>
    <Navbar />
    <section>
      <FeaturedTitle />
      <VideoGitHubIntegrated />
      <div class="wave wave-top"></div>
      <VideoCreateBounty />
      <div class="wave wave-bottom"></div>
      <!--       <FeaturedTitleTwo /> -->
      <VideoClaimBounty />
      <a id="team"></a>
    </section>
    <div class="wave wave-footer"></div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedTitle from "../components/FeaturedTitle";
import FeaturedTitleTwo from "../components/FeaturedTitleTwo";
import VideoClaimBounty from "../components/VideoClaimBounty";
import VideoCreateBounty from "../components/VideoCreateBounty";
import VideoGitHubIntegrated from "../components/VideoGitHubIntegrated";

export default {
  components: {
    Navbar,
    FeaturedTitle,
    Footer,
    VideoClaimBounty,
    VideoCreateBounty,
    VideoGitHubIntegrated
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
