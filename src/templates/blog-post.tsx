import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import { BlogPostQuery } from './__generated__/BlogPostQuery'

const BlogPost: React.FC<{ data: BlogPostQuery }> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <h1>{post?.frontmatter?.title ?? 'Missing title'}</h1>
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
      }
    }
  }
`
