import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import { Tag } from 'carbon-components-react'
import { TagsPageQuery } from './__generated__/TagsPageQuery'
import kebabCase from 'lodash/kebabCase'

const TagsPage: React.FC<{ data: TagsPageQuery }> = ({ data }) => {
  const group = data.allMarkdownRemark.group
  const title = data.site?.siteMetadata?.title ?? ''

  return (
    <Layout>
      <SEO title={title} />
      <div>
        <h1>Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue ?? ''}>
              <Link to={`/tags/${kebabCase(tag.fieldValue ?? '')}/`}>
                <Tag type="green">
                  {tag.fieldValue} ({tag.totalCount})
                </Tag>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query TagsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
