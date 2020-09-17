const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
        path: node.fields.slug,
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}


// const path = require('path')

// exports.onCreateNode = ({node, actions}) => {
//     const { createNodeField } = actions
//     if(node.internal.type === "MarkdownRemark") {
//         const slug = path.basename(node.fileAbsolutePath, '.md')
        
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions

//     const blogPostTemplate = path.resolve('./src/templates/blog.js')

//     const res = await graphql(`
//         query {
//             allMarkdownRemark {
//                 edges {
//                     node {
//                         fields {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `)

//     res.data.allMarkdownRemark.edges.forEach((edge) => {
//         createPage({
//             component: blogPostTemplate,
//             path: `/blog/${edge.node.fields.slug}`,
//             context: {
//                 slug: edge.node.fields.slug
//             }
//         })
//     }

// )}
