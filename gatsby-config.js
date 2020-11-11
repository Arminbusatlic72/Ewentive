/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Ewentive company official website",
    author: "Armin Busatlic",
  },
  plugins: [
  
    `gatsby-plugin-netlify`,
    `gatsby-plugin-preact`,
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    
  `gatsby-plugin-sass`,
  `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`,
  `gatsby-plugin-react-helmet`,
  
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-5DRD8BV",

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

    },
  },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'ewentive',
       
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        schemas: {
          menu: require('./src/schemas/menu.json'),
          content_item: require('./src/schemas/content_item.json'),
          index_page: require('./src/schemas/index_page.json'),
          list_page: require('./src/schemas/list_page.json'),
          no_sidebar_page: require('./src/schemas/no_sidebar.json')
        },
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return true
        },
        linkResolver: ({ node, key, value }) => (doc) => {
          // Your link resolver
        }
        
      },
    }
    
  ],
}