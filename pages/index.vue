<template>
  <div>
    <div class="header-dimmer"></div>
    <Navbar />
    <section>
      <!--      .wave-top {
  background-image: url("/img/wave-top.png");
  background-position: 0px 1px;
  height: 9.097222222vw;
}

.wave-bottom {
  background-image: url("/img/wave-bottom.png");
  background-position: 0px -1px;
  height: 4.883958333vw;
}

.wave-footer {
  background-image: url("/img/wave-footer.png");
  background-position: 0px 1px;
  height: 12.533880556vw;
} -->

      <FeaturedTitle />
      <VideoGitHubIntegrated />
      <VideoCreateBounty />
      <div class="wave wave-bottom"></div>
      <!--       <FeaturedTitleTwo /> -->
      <VideoClaimBounty />
      <a id="team"></a>
    </section>
    <!-- <div class="wave wave-footer"></div> -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedTitle from "../components/FeaturedTitle";
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
