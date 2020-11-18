module.exports = {
  pwa: {
    name: "STAY VIBRANT",
    iconPaths: {
      favicon32: "img/icons/favicon-32x32.png",
    },
    themeColor: "#000",
    manifestOptions: {
      background_color: "#000",
    },
    // workboxOptions: {
    //   swSrc: "dev/sw.js",
    // },
  },
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "STAY VIBRANT",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
};
