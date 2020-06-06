import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import { TagsQuery } from './__generated__/TagsQuery'

/**
 * Page template for a given tag, listing all the related posts
 */
const Tags: React.FC<{ pageContext: { tag: string }; data: TagsQuery }> = ({
  pageContext,
  data,
}) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO
        title={tag}
        description={`List of blog posts tagged with '${tag}'`}
      />
      <h2>{tagHeader}</h2>
      <ol>
        {edges.map(({ node }) => {
          const slug = node.fields.slug
          const title = node.frontmatter.title
          const date = node.frontmatter.date
          return (
            <li key={slug}>
              <Link to={slug}>
                {title} - {date}
              </Link>
            </li>
          )
        })}
      </ol>
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query TagsQuery($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "yyyy-MM-DD")
          }
        }
      }
    }
  }
`
