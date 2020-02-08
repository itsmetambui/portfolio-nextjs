const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");
const withImages = require("next-images");

module.exports = withCSS(
  withSass(
    withFonts(
      withImages({
        env: {
          googleMapKey: "AIzaSyCUfCOt2hnxLnR3lhsYKxuyrAZcpGt8biQ"
        },
        enableSvg: true,
        webpack(config, options) {
          return config;
        }
      })
    )
  )
);
