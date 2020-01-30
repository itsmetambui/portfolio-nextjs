const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");

module.exports = withCSS(
  withSass(
    withFonts({
      enableSvg: true,
      webpack(config, options) {
        return config;
      }
    })
  )
);
