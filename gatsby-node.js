const path = require("path")
const products = require("./static/products.json")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const MAIN_TEMPLATE = path.resolve("src/components/templates/Main/Main.js")
  const PRODUCT_TEMPLATE = path.resolve(
    "src/components/templates/Product/Product.js"
  )

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allStoryblokEntry {
              edges {
                node {
                  id
                  name
                  created_at
                  uuid
                  slug
                  full_slug
                  content
                  is_startpage
                  parent_id
                  group_id
                  field_component
                }
              }
            }
          }
        `
      )
        .then(result => {
          if (result.errors) {
            // eslint-disable-next-line no-console
            console.log(result.errors)
            reject(result.errors)
          }

          products.forEach(({ slug, ...props }) => {
            createPage({
              path: slug.toLowerCase(),
              component: PRODUCT_TEMPLATE,
              context: props,
            })
          })

          result.data.allStoryblokEntry.edges.forEach(({ node }) => {
            createPage({
              path: node.full_slug === "home" ? "/" : node.full_slug,
              component: MAIN_TEMPLATE,
              context: {
                blok: node.content,
              },
            })
          })
        })
        // eslint-disable-next-line no-console
        .catch(console.error)
    )
  })
}
