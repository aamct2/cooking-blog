import './index.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { IndexQuery } from './__generated__/IndexQuery'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'

const IndexPage: React.FC = () => {
  const data = useStaticQuery(query) as IndexQuery

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Welcome to Aaron’s cooking blog</h2>
      <p>
        This site contains a record of some of my cooking and baking projects.
      </p>
      <section>
        <h3>Posts</h3>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node?.fields?.slug ?? ''}>
              <h4>
                {node.frontmatter?.title} - {node.frontmatter?.date}
              </h4>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </section>
      <section>
        <p>
          <Link to="/tags">Tags page</Link>
        </p>
      </section>
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
