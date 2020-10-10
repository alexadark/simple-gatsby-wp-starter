import React from "react"
import { Layout } from "../components"

const SinglePost = ({ data }) => {
  const { title, content } = data.wpPost
  console.log("data", data)

  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  )
}
export default SinglePost

export const pageQuery = graphql`
  query GET_POST($uri: String!) {
    wpPost(uri: { eq: $uri }) {
      content
      databaseId
      ...PostTemplateFragment
    }
  }
`
