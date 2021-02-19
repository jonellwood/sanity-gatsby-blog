const path = require(`path`)

// Log out information after build is done
exports.onPostBuild = ({reporter}) => {
  reporter.info(`Your Gatsby Site has been built Dog!`)
}
const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {format} = require('date-fns')

async function createBlogPostPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
      allSanityPark {
        edges {
          node {
            name
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/blog/${dateSegment}/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: {id}
      })
    })

  const parkEdges = (result.data.allSanityPark || {}).edges || []

  parkEdges
    .forEach((edge, index) => {
      const {id, slug = {}} = edge.node
      const path = `/park/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/Park.js'),
        context: {id}
      })
    })
}
// create pages dynamicallys

// exports.createPages = async ({graphql, actions}) => {
//   const {createPage} = actions
//   const parkPageTemplate = path.resolve(`src/templates/Park.js`)
//   const result = await graphql(`
//     query{
//       park:allSanityPark{
//         edges {
//           node {
//             name
//             slug {
//               current
//             }
//           }
//         }
//       }
//   `)
//   console.log('result of query is', {result})
//   result.data.park.edges.node.forEach(node => {
//     createPage({
//       path: `${node.slug.current}`,
//       component: parkPageTemplate,
//       context: {
//         name: node.name,
//         slug: node.slug.current

//       }
//     })
//   }
//   )
// }
exports.createPages = async ({graphql, actions}) => {
  await createBlogPostPages(graphql, actions)
}
