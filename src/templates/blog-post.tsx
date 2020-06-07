import { Link, graphql } from 'gatsby'
import { BlogPostQuery } from './__generated__/BlogPostQuery'
import Layout from '../components/Layout'
import React from 'react'
import SEO from '../components/SEO'
import Tag from '../components/Tag'
import kebabCase from 'lodash/kebabCase'

/**
 * Page template for a single blog post
 */
const BlogPost: React.FC<{ data: BlogPostQuery }> = ({ data }) => {
  const post = data.markdownRemark
  const title = post?.frontmatter?.title ?? 'Missing title'
  const date = (post?.frontmatter?.date as string) ?? ''
  const tags = (post?.frontmatter?.tags ?? []).sort()
  const tagsSEO = tags.map(tag => {
    return {
      name: 'article:tag',
      content: tag ?? '',
    }
  })

  return (
    <Layout>
      <SEO title={title} type="article" meta={tagsSEO} />
      <article>
        <h1>{title}</h1>
        <time dateTime={date}>{date}</time>
        <section>
          <>
            {tags.map(tag => {
              return (
                <Link to={`/tags/${kebabCase(tag ?? '')}/`} key={tag ?? ''}>
                  <Tag>{tag}</Tag>
                </Link>
              )
            })}
          </>
        </section>
        <section
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
