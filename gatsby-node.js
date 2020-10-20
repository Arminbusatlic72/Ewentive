const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      allPrismicContentItem {
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
  pages.data.allPrismicContentItem.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}