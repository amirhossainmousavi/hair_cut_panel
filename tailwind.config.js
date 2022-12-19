module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.vue",
    "./components/**/*.js",
    "./pages/**/*.vue",
    "./plugins/**/*.js",
    "./nuxt.config.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        IRANSansWebBold: ["IRANSansWebBold"],
        IRANSansWebBlack: ["IRANSansWebBlack"],
      },
    },
  },
};
