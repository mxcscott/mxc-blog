const path = require("path")

/*TODO: make it so that non EN posts can be present without an EN connection*/

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allStrapiPosts(filter: { post: { publish: { eq: true } } }) {
        nodes {
          post {
            slug
          }
        }
      }
      categories: allStrapiCategories(
        filter: { posts: { elemMatch: { post: { publish: { eq: true } } } } }
      ) {
        nodes {
          koSlug
          zhtwSlug
          zhchSlug
          slug
        }
      }
      tags: allStrapiTags(
        filter: { posts: { elemMatch: { post: { publish: { eq: true } } } } }
      ) {
        nodes {
          koSlug
          zhtwSlug
          zhchSlug
          slug
        }
      }
      allStrapiZhchPosts(filter: {post: {publish: {eq: true}}, enPost: {post: {slug: {glob: "*"}}}}) {
        nodes {
          post {
            slug
          }
          enPost {
            post {
              slug
            }
          }
        }
      }
      allStrapiZhtwPosts(filter: {post: {publish: {eq: true}}, enPost: {post: {slug: {glob: "*"}}}}) {
        nodes {
          post {
            slug
          }
          enPost {
            post {
              slug
            }
          }
        }
      }
      allStrapiKoPosts(filter: {post: {publish: {eq: true}}, enPost: {post: {slug: {glob: "*"}}}}) {
        nodes {
          post {
            slug
          }
          enPost {
            post {
              slug
            }
          }
        }
      }
    }
  `)
  /* Create Post Pages*/
  data.allStrapiPosts.nodes.forEach(node => {
    createPage({
      path: node.post.slug,
      component: path.resolve("./src/components/Templates/Post-Template.js"),
      context: {
        slug: node.post.slug,
      },
    })
  })
  data.allStrapiZhchPosts.nodes.forEach(node => {
    createPage({
      path: `/zh-hans/${node.post.slug}`,
      component: path.resolve(
        "./src/components/Templates/Post-Template-zhch.js"
      ),
      context: {
        slug: node.post.slug,
        enSlug: node.enPost.post.slug,
      },
    })
  })
  data.allStrapiZhtwPosts.nodes.forEach(node => {
    createPage({
      path: `/zh-hant/${node.post.slug}`,
      component: path.resolve(
        "./src/components/Templates/Post-Template-zhtw.js"
      ),
      context: {
        slug: node.post.slug,
        enSlug: node.enPost.post.slug,
      },
    })
  })
  data.allStrapiKoPosts.nodes.forEach(node => {
    createPage({
      path: `/ko/${node.post.slug}`,
      component: path.resolve("./src/components/Templates/Post-Template-ko.js"),
      context: {
        slug: node.post.slug,
        enSlug: node.enPost.post.slug,
      },
    })
  })

  /* Create Categories Pages */
  data.categories.nodes.forEach(node => {
    createPage({
      path: `/categories/${node.slug}`,
      component: path.resolve(
        "./src/components/Templates/Category-Template.js"
      ),
      context: {
        slug: node.slug,
      },
    })
  })
  data.categories.nodes.forEach(node => {
    createPage({
      path: `/ko/categories/${node.koSlug}`,
      component: path.resolve(
        "./src/components/Templates/Category-Template.js"
      ),
      context: {
        slug: node.koSlug,
      },
    })
  })
  data.categories.nodes.forEach(node => {
    createPage({
      path: `/zh-hans/categories/${node.zhchSlug}`,
      component: path.resolve(
        "./src/components/Templates/Category-Template.js"
      ),
      context: {
        slug: node.zhchSlug,
      },
    })
  })
  data.categories.nodes.forEach(node => {
    createPage({
      path: `/zh-hant/categories/${node.zhtwSlug}`,
      component: path.resolve(
        "./src/components/Templates/Category-Template.js"
      ),
      context: {
        slug: node.zhtwSlug,
      },
    })
  })

  /* Create Tags Pages */
  data.tags.nodes.forEach(node => {
    createPage({
      path: `/tags/${node.slug}`,
      component: path.resolve("./src/components/Templates/Tag-Template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.tags.nodes.forEach(node => {
    createPage({
      path: `/ko/tags/${node.koSlug}`,
      component: path.resolve("./src/components/Templates/Tag-Template.js"),
      context: {
        slug: node.koSlug,
      },
    })
  })
  data.tags.nodes.forEach(node => {
    createPage({
      path: `/zh-hans/tags/${node.zhchSlug}`,
      component: path.resolve("./src/components/Templates/Tag-Template.js"),
      context: {
        slug: node.zhchSlug,
      },
    })
  })
  data.tags.nodes.forEach(node => {
    createPage({
      path: `/zh-hant/tags/${node.zhtwSlug}`,
      component: path.resolve("./src/components/Templates/Tag-Template.js"),
      context: {
        slug: node.zhtwSlug,
      },
    })
  })
}