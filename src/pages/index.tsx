import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import { IndexQuery } from './__generated__/IndexQuery'

const IndexPage: React.FC = () => {
  const data = useStaticQuery(query) as IndexQuery

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to Aaron's cooking blog</h1>
      <p>
        This site contains a record of some of my cooking and baking projects.
      </p>
      <h2>Posts</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <>
          <h3>
            {node.frontmatter?.title} - {node.frontmatter?.date}
          </h3>
          <p>{node.excerpt}</p>
        </>
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`
