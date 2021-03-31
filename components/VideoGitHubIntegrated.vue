<template>
  <div
    class="ps-md-5 ms-md-5 mb-5 pb-5 mb-md-0 pb-md-0 content-bg content-bg3 rellax"
    v-rellax="{speed:0}"
  >
    <div class="pb-5 pb-md-0 w-100 d-flex justify-content-center justify-content-md-between">
      <div
        class="card p-md-5 p-4 mb-auto border-0 shadow-lg vw-50 rellax"
        v-rellax="{speed:-1}"
        style="margin-top: -4vw;"
      >
        <h4 class="accent-color">Innovative Marketplace to Outsource Tasks</h4>
        <h1>GitHub Integrated</h1>
        <p class="m-0">
          Octobay provided trustless bounties for open source projects hosted on GitHub.<br>
          <br>
          Each reward can be stored in a smart contract to act as a middleman between the customer and the developer.
          Once an issue is closed, the contributor can claim his reward without additional consense from the maintainer.
        </p>
      </div>
      <div
        class="d-none d-md-block animation animation-right shadow-lg p-2 mb-auto bg-white vw-25 rellax"
        v-rellax="{speed:-0.5}"
      >
        <video
          style="width:80vw; height:50vw;"
          autoplay="autoplay"
          muted
          loop
        >
          <source
            src="video/github-workflow-new.mp4"
            type="video/mp4"
          >
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoGitHubIntegrated",
};
</script>

<style>
</style>