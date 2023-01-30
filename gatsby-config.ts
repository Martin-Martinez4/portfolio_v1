import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "/portfolio_v1",
  siteMetadata: {
    title: `Martin Martinez: Web Developer Portfolio`,
    siteUrl: `https://martin-martinez4.github.io/portfolio_v1/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
      "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap",
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          "icon": "src/images/icon.png"
        }
      }, 
      "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          "name": "images",
          "path": "./src/images/"
        },
        __key: "images"
      }, 
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          "name": "pages",
          "path": "./src/pages/"
        },
        __key: "pages"
      },
      `gatsby-transformer-json`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `./src/data`,
        
        },
        },
  ]
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

export default config;
