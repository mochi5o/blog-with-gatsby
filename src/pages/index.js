import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h4>Posts</h4>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div>
            <Link to={node.slug}>
              <p>{node.title}</p>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
    </Layout>
  )
}


export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }`