import './tags.scss'
import Layout from '../components/Layout'
import React from 'react'
import SEO from '../components/SEO'
import Tag from '../components/Tag'
import { TagsPageQuery } from './__generated__/TagsPageQuery'
import { graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

/**
 * Page listing all of the tags used throughout the blog
 */
const TagsPage: React.FC<{ data: TagsPageQuery }> = ({ data }) => {
  const group = data.allMarkdownRemark.group

  return (
    <Layout>
      <SEO title="Tags" />
      <div>
        <h1>Tags</h1>
        <ul className="TagsList">
          {group.map(tag => (
            <li key={tag.fieldValue ?? ''}>
              <Tag
                link={`/tags/${kebabCase(tag.fieldValue ?? '')}`}
                name={`${tag.fieldValue} (${tag.totalCount})`}
              />
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
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
