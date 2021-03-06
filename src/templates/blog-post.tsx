import './blog-post.scss'
import { BlogPostQuery } from './__generated__/BlogPostQuery'
import Layout from '../components/Layout'
import React from 'react'
import SEO from '../components/SEO'
import Tag from '../components/Tag'
import { graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

/**
 * Generates the Schema.org SEO for the blog
 * @param title Title of the blog post
 * @param date Date of the blog post
 */
function blogSEO(
  title: string,
  date: string,
  author: string,
  imageURL?: string
): {
  type: string
  content: string
} {
  return {
    type: 'application/ld+json',
    content: JSON.stringify({
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      author: {
        '@type': 'Person',
        name: author,
      },
      datePublished: date,
      headline: title,
      name: title,
      image: imageURL,
    }),
  }
}

/**
 * Page template for a single blog post
 */
const BlogPost: React.FC<{ data: BlogPostQuery }> = ({ data }) => {
  const post = data.post
  const title = post?.frontmatter.title ?? 'Missing title'
  const date = (post?.frontmatter.date as string) ?? ''
  const author = data.siteData?.siteMetadata.author ?? ''
  const imageRelativeURL =
    post?.frontmatter.featuredImage.childImageSharp?.fixed?.src
  const siteURL = data.siteData?.siteMetadata.siteUrl
  const imageURL =
    siteURL && imageRelativeURL ? siteURL + imageRelativeURL : undefined
  const tags = (post?.frontmatter?.tags ?? []).sort()
  const tagsSEO = tags.map(tag => {
    return {
      name: 'article:tag',
      content: tag ?? '',
    }
  })
  const schemaSEO = blogSEO(title, date, author, imageURL)

  return (
    <Layout>
      <SEO
        title={title}
        imageURL={imageURL}
        type="article"
        meta={tagsSEO}
        script={schemaSEO}
      />
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
    siteData: site {
      siteMetadata {
        author
        siteUrl
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "yyyy-MM-DD")
        featuredImage {
          childImageSharp {
            fixed(width: 240) {
              src
            }
          }
        }
        tags
      }
    }
  }
`
