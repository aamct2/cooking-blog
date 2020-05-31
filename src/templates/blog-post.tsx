import { BlogPostQuery } from './__generated__/BlogPostQuery'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import { Tag } from 'carbon-components-react'
import { graphql } from 'gatsby'

const BlogPost: React.FC<{ data: BlogPostQuery }> = ({ data }) => {
  const post = data.markdownRemark
  const title = post?.frontmatter?.title ?? 'Missing title'
  const date = (post?.frontmatter?.date as string) ?? ''

  return (
    <Layout>
      <SEO title={title} />
      <article>
        <h2>{title}</h2>
        <time dateTime={date}>{date}</time>
        <section>
          <>
            {post?.frontmatter?.tags?.map(tag => {
              return (
                <Tag type="green" key={tag ?? ''}>
                  <p>{tag}</p>
                </Tag>
              )
            })}
          </>
        </section>
        <div
          dangerouslySetInnerHTML={{ __html: post?.html ?? 'Missing body' }}
        />
      </article>
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
        date(formatString: "yyyy-MM-DD")
        tags
      }
    }
  }
`
