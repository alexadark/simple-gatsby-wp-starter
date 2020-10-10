import React from "react"
import { Layout } from "../components"

const Blog = ({ data }) => {
  const posts = data?.allWpPost?.nodes
  console.log("posts", posts)

  return (
    <Layout>
      <h1>Blog</h1>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query GET_POSTS($skip: Int!, $limit: Int!) {
    allWpPost(limit: $limit, skip: $skip, sort: { order: DESC, fields: date }) {
      nodes {
        ...PostTemplateFragment
      }
    }
  }
`
