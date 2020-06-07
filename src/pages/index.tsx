import { graphql, useStaticQuery } from 'gatsby'
import BlogSummary from '../components/BlogSummary'
import { IndexQuery } from './__generated__/IndexQuery'
import Layout from '../components/Layout'
import React from 'react'
import SEO from '../components/SEO'

/**
 * Home page of the website
 */
const IndexPage: React.FC = () => {
  const data = useStaticQuery(query) as IndexQuery

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to Aaron’s cooking blog</h1>
      <p>
        This site contains a record of some of my cooking and baking projects.
      </p>
      <section>
        <h2>Recent Posts</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogSummary
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
          />
        ))}
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "yyyy-MM-DD")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
