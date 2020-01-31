const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");

module.exports = withCSS(
  withSass(
    withFonts({
      env: {
        googleMapKey: "AIzaSyCUfCOt2hnxLnR3lhsYKxuyrAZcpGt8biQ"
      },
      enableSvg: true,
      webpack(config, options) {
        return config;
      }
    })
  )
);
