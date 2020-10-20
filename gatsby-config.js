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
  plugins: [
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
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: 'Raleway', 
          subsets: [`latin`],
        },
        {
          family: `Raleway`,
          variants: [`100`,`200`,`300`,`500`,`600`,`700`,`800`,`900`]
        },
      ],
    },
  },

    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'ewentive',
       
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        schemas: {
          content_item: require('./src/schemas/content_item.json'),
          index_page: require('./src/schemas/index_page.json')
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
