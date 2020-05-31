import { Link, graphql } from 'gatsby'
import { ListItem, OrderedList } from 'carbon-components-react'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import { TagsQuery } from './__generated__/TagsQuery'

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
      <SEO title="tagHeader" />
      <h2>{tagHeader}</h2>
      <OrderedList>
        {edges.map(({ node }) => {
          const slug = node.fields?.slug ?? ''
          const title = node.frontmatter?.title ?? ''
          return (
            <ListItem key={slug}>
              <Link to={slug}>{title}</Link>
            </ListItem>
          )
        })}
      </OrderedList>
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
          }
        }
      }
    }
  }
`
