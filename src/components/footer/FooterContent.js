/** @jsx jsx */
import { jsx, Container } from "theme-ui"

export const FooterContent = () => {
  return (
    <Container>
      © {new Date().getFullYear()} | Built with{` `}
      <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Container>
  )
}
