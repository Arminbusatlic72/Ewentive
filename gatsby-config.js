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
    },
    
  `gatsby-plugin-sass`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `ewentive-gatsby-site`,
      short_name: `Ewentive`,
      start_url: `/`,
      background_color: `#ffff`,
      theme_color: `#000`,
      display: `minimal-ui`,
      icon: `src/images/EWENTIVE-logo.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-plugin-offline`,
    options: {
      precachePages: [`/index/`, `/about-ewentive/*`],
    },
  },
  
  {
    resolve: `gatsby-plugin-gdpr-cookies`,
    options: {
      googleTagManager: {
        trackingId: "GTM-5DRD8BV", // leave empty if you want to disable the tracker
        routeChangeEvent: "gatsbyRouteChange",
        cookieName: 'gatsby-gdpr-google-tagmanager', // default
        dataLayerName: 'dataLayer', // default
      },
      
      // Defines the environments where the tracking should be available  - default is ["production"]
      environments: ['production', 'development']
    },
  },
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-5DRD8BV",
      

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

    },
  }
       
  ],
}