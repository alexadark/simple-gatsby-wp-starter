const createSitePages = require(`./create/createSitePages`)
const createPosts = require(`./create/createPosts`)

exports.createPages = async ({ actions, graphql }) => {
  await createSitePages({ actions, graphql })
  await createPosts({ actions, graphql })
}
