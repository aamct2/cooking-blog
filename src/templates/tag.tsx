import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import React from 'react'
import SEO from '../components/SEO'
import { TagsQuery } from './__generated__/TagsQuery'
import upperFirst from 'lodash/upperFirst'

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
        title={upperFirst(tag)}
        description={`List of blog posts tagged with '${tag}'`}
      />
      <h1>{tagHeader}</h1>
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
