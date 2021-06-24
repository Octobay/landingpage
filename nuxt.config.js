export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "OpenQ - Decentralized Job Marketplace for Developers.",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1 ,maximum-scale=1.0, user-scalable=no"
      },
      {
        hid: "description",
        name: "OpenQ - Decentralized Job Marketplace",
        content:
          "OpenQ extends the distributed trust model by collateralizing bounties for projects hosted on GitHub. Welcome to the first fully decentralized job marketplace based on smart contracts."
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "openq, bounties, job, marketplace"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" }
      /* {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Karla:wght@800&display=swap"
      } */
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/963e26517d.js",
        crossorigin: "anonymous"
      }
    ],
    css: [
      //CSS files in the project
      "~/assets/css/landing.css",
      "~/assets/css/landing-mobile.css"
    ],
    routes: [
      { src: "/_nuxt/.+", headers: { "Cache-Control": "max-age=31557600" } },
      {
        src: "/sw.js",
        dest: "/_nuxt/static/sw.js",
        headers: {
          "cache-control": "public, max-age=43200, immutable",
          "Service-Worker-Allowed": "/"
        }
      },
      { src: "/(.*)", dest: "/" }
    ]
  },

  /*

  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js"></script>
    <script src="https://kit.fontawesome.com/963e26517d.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> 
    <link href="main.css" rel="stylesheet">
    <link href="mobile.css" rel="stylesheet">
  </head>
  */

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/node_modules/vue-rellax/lib/nuxt-plugin", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
