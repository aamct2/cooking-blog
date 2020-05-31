import { BlogPostQuery } from './__generated__/BlogPostQuery'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import { Tag } from 'carbon-components-react'
import { graphql } from 'gatsby'

const BlogPost: React.FC<{ data: BlogPostQuery }> = ({ data }) => {
  const post = data.markdownRemark
  const title = post?.frontmatter?.title ?? 'Missing title'

  return (
    <Layout>
      <SEO title={title} />
      <div>
        <h1>{title}</h1>
        <>
          {post?.frontmatter?.tags?.map(tag => {
            return (
              <Tag type="green" key={tag ?? ''}>
                <p>{tag}</p>
              </Tag>
            )
          })}
        </>
        <div
          dangerouslySetInnerHTML={{ __html: post?.html ?? 'Missing body' }}
        />
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`
