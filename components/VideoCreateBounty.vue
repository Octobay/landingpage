<template>
  <div id="promotion" style="background-color: #652FFF;">
    <img class="wave-img" src="/img/wave-top.png" width="100%" />
    <div
      class="pe-md-5 me-md-5 content-bg content-bg2 d-flex justify-content-end "
    >
      <a></a>
      <div
        class="w-100 mt-md-75 d-flex justify-content-center justify-content-md-between"
      >
        <div class="d-none d-md-block mt-5">
          <div
            class="animation animation-left shadow-lg mb-auto mt-5 pt-3 bg-white vw-25 "
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
          class="card p-md-5 p-4 border-0 shadow-lg vw-50 mb-auto "
          style="margin-top: -4vw;"
        >
          <h4 class="accent-color">
            Innovative Marketplace to Outsource Tasks
          </h4>
          <h1>Fund Issues, Get Devs. Resolve Issues, Get Paid.</h1>
          <p class="m-0">
            Create bounties by depositing on open issues. Withdrawals are only
            possible once an issue is closed. If a
            <a
              href="https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-issues/linking-a-pull-request-to-an-issue"
              target="_blank"
            >
              pull request was involved
            </a>
            only its author is eligible to withdraw. 30 days after an issue has
            been closed, deposits can be refunded to their senders.<br />
            <br />
            Bounties can also be released manually by maintainers commenting on
            an issue.
          </p>
        </div>
      </div>
    </div>
    <img class="wave-img-bottom" src="/img/wave-bottom.png" width="100%" />
  </div>
</template>

<script>
export default {
  name: "VideoCreateBounty"
};
</script>

<style></style>
