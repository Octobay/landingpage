<template>
  <div
    class="mb-5 pb-5 mb-md-0 pb-md-0 ps-md-5 ms-md-5 content-bg content-bg1 rellax"
  >
    <a id="smartbounties"></a>
    <div class="w-100 d-flex justify-content-center justify-content-md-between">
      <div
        class="card claim-custom-pos p-md-5 p-4 mb-auto border-0 shadow-lg vw-50 rellax"
      >
        <h4 class="accent-color">
          Effective Outsourcing Solution
        </h4>
        <h1>Atomic Contracting</h1>
        <p class="m-0">
          Atomic Contracts are a combination of escrow smart contracts and CI/CD
          workflows, to facilitate larger scale payment models, like in
          traditional contracting.<br />
          <br />

          Atomic contracting helps you to maintain a high overall project
          quality and to keep your processes clear.
        </p>
      </div>
      <div
        class="d-none d-md-block animation animation-right shadow-lg p-2 mb-auto bg-white vw-25 rellax"
        v-rellax="{ speed: 0 }"
      >
        <!-- width="220"
              height="425" -->
        <video
          style="width:25vw; height:28.295vw;"
          autoplay="autoplay"
          muted
          loop
        >
          <source src="video/claim-bounty-new.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoClaimBounty"
};
</script>

<style></style>
