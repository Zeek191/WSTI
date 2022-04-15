const path = require("path")

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@": path.join(__dirname, "src").replace(/\\/g, "/"),
        "~": path.join(__dirname, "public").replace(/\\/g, "/"),
      },
    },
    "gatsby-plugin-svgr",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        additionalData: `@import "${path
          .join(__dirname, "src/base/styles/variables.scss")
          .replace(/\\/g, "/")}";`,
      },
    },
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: process.env.GATSBY_STORYBLOK_TOKEN,
        version: "draft",
      },
    },
  ],
}
