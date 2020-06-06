import { Link } from 'gatsby'
import React from 'react'

function blogExcerpt(excerpt: string | null): JSX.Element | null {
  if (excerpt) {
    return <p>{excerpt}</p>
  }

  return null
}

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
