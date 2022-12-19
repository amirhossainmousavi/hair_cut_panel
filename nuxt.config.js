export default {
  target: "static",
  publicRuntimeConfig: {
    baseUrl:
      process.env.BASE_URL || "http://haircutt.ir/wp-json/dokan/v1/orders",
  },
  head: {
    title: "hair-cut",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["~/assets/build.scss"],
  plugins: ["~/plugins/api"],
  components: [
    "~/components/Home/",
    "~/components/core/",
    "~/components/icon/",
    "~/components/SignUp/",
    "~/components/Panel/",
  ],
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: [
    "@nuxtjs/axios",
    [
      "vue-toastification/nuxt",
      {
        position: "top-right",
        timeout: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        transition: "Vue-Toastification__fade",
        icon: false,
        rtl: true,
      },
    ],
  ],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
      },
    },
  },
};
