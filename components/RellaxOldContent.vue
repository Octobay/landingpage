<template>
  <header>
    <div class="header-content">
      <div class="d-flex">
        <img
          src="img/logo.png"
          class="logo mx-auto mx-md-0"
          width="80"
        />
      </div>
      <div class="nav">
        <a
          href="#smartbounties"
          class="btn text-white"
        >Smart Bounties</a>
        <a
          href="#promotion"
          class="btn text-white"
        >Promotion</a>
        <a
          href="#team"
          class="btn text-white"
        >Team</a>
      </div>
      <div
        class="header-text mt-md-0 rellax"
        data-rellax-desktop-speed="-5"
        data-rellax-tablet-speed="-3"
        data-rellax-mobile-speed="-3"
      >
        <h1 class="text-white">OpenQ</h1>
        <h2 class="text-white mt-3 mt-md-0">
          The future of Open Source<br /><span class="d-none d-md-inline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>collaboration and funding.
        </h2>
        <div class="mt-md-5 pt-md-5 pt-4 d-flex justify-content-center flex-column flex-md-row">
          <a
            href="#"
            class="btn btn-lg call-to-action me-md-3"
          >Launch App</a>
          <a
            href="#"
            class="btn btn-lg call-to-action call-to-action-invert ms-md-3 mt-3 mt-md-0"
          >Whitepaper</a>
        </div>
      </div>
    </div>
    <div
      class="header-dimmer-gradient rellax"
      v-rellax="{ speed: 0 }"
    ></div>
    <div
      class="rellax"
      v-rellax="{ speed: -10 }"
    >
      <img src="img/header-layer-sky-and-sun.png" />
    </div>
    <div
      class="rellax"
      v-rellax="{ speed: -8 }"
    >
      <img src="img/header-layer-clouds.png" />
    </div>
    <div
      class="rellax"
      v-rellax="{ speed: -7 }"
    >
      <img src="img/header-layer-mountain2.png" />
    </div>
    <div
      class="rellax"
      v-rellax="{ speed: -6 }"
    >
      <img src="img/header-layer-see.png" />
    </div>
    <div
      class="rellax"
      v-rellax="{ speed: -5 }"
    >
      <img src="img/header-layer-octo.png" />
    </div>
    <div
      class="rellax"
      v-rellax="{ speed: -5 }"
    >
      <img src="img/header-layer-mountain1.png" />
    </div>
    <div
      class="rellax layer-dev"
      v-rellax="{ speed: 0 }"
    >
      <img src="img/header-layer-dev.png" />
    </div>
  </header>
</template>

<script>
export default {
  name: "RellaxOldContent",
};
</script>

<style></style>
