import { Link } from 'gatsby'
import React from 'react'

/**
 * Generates an excerpt summary representation
 * @param excerpt Excerpt text
 */
function blogExcerpt(excerpt: string | null): JSX.Element | null {
  if (excerpt) {
    return <p>{excerpt}</p>
  }

  return null
}

/**
 * Summary of a blog post
 * @param date Date of the blog post as a formatted `string`
 * @param excerpt Excerpt text from the blog
 * @param slug Slug (relative URL) for the post
 * @param title Title of hte blog
 */
const BlogSummary: React.FC<{
  date: string
  excerpt: string | null
  slug: string
  title: string
}> = ({ date, excerpt, slug, title }) => {
  const summary = blogExcerpt(excerpt)

  return (
    <div>
      <Link to={slug}>
        <h4>{title + ' - ' + date}</h4>
      </Link>
      {summary}
    </div>
  )
}

export default BlogSummary
