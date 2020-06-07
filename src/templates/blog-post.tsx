import './blog-post.scss'
import { BlogPostQuery } from './__generated__/BlogPostQuery'
import Layout from '../components/Layout'
import React from 'react'
import SEO from '../components/SEO'
import Tag from '../components/Tag'
import { graphql } from 'gatsby'
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
          <ul className="BlogTagsList">
            {tags.map(tag => {
              return (
                <li key={tag ?? ''}>
                  <Tag
                    link={`/tags/${kebabCase(tag ?? '')}/`}
                    name={tag ?? ''}
                  />
                </li>
              )
            })}
          </ul>
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
