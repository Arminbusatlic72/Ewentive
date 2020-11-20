const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
     allPrismicNoSidebarPage {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)
 
  
  const no_sidebarTemplate = path.resolve("src/templates/no_sidebar_post.jsx")
  
  pages.data.allPrismicNoSidebarPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: no_sidebarTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}