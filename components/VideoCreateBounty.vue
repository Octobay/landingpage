<template>
  <div id="promotion" style="background-color: #652FFF;">
    <img class="wave-img" src="/img/wave-top.png" width="100%" />
    <div
      class="pe-md-5 me-md-5 content-bg content-bg2 rellax d-flex justify-content-end rellax"
      v-rellax="{ speed: 0 }"
    >
      <a></a>
      <div
        class="w-100 mt-md-145 d-flex justify-content-center justify-content-md-between"
      >
        <div class="d-none d-md-block mt-5">
          <div
            class="animation animation-left shadow-lg mb-auto mt-5 pt-3 bg-white vw-25 rellax"
            v-rellax="{ speed: 0 }"
          >
            <video
              style="width:25vw; height:40.295vw;"
              autoplay="autoplay"
              muted
              loop
            >
              <source src="video/create-bounty.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="image-content-1">
          <!--  <img src="img/create-bounty-mobile-2.png" /> -->
        </div>
        <div
          class="card p-md-5 p-4 border-0 shadow-lg vw-50 mb-auto rellax"
          v-rellax="{ speed: 0 }"
          style="margin-top: -4vw;"
        >
          <h4 class="accent-color">
            Innovative Marketplace to Outsource Tasks
          </h4>
          <h1>Create Bounties</h1>
          <p class="m-0">
            Octobay continues to expand on the distributed trust model by
            collateralizing bounties for open source projects hosted on Github.
            <br />
            <br />
            Each reward is stored in a smart contract to act as a middleman
            between the customer and the developer.
          </p>
        </div>
      </div>
    </div>
    <!--  <img class="wave-img-bottom" src="/img/wave-bottom.png" width="100%" /> -->
  </div>
</template>

<script>
export default {
  name: "VideoCreateBounty"
};
</script>

<style></style>
