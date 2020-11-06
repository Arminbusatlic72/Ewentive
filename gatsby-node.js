const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      allPrismicContentItem {
        edges {
          node {
            uid
            id
          }
        }
      }
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
  const template = path.resolve("src/templates/post.jsx")
  const no_sidebartemplate = path.resolve("src/templates/no_sidebar_post.jsx")
  
  pages.data.allPrismicContentItem.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
  pages.data.allPrismicNoSidebarPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: no_sidebartemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}