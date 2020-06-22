import './BlogCard.scss'
import { Link } from 'gatsby'
import React from 'react'

/**
 * Card summary of a blog post
 * @param date Date of the blog post as a formatted `string`
 * @param excerpt Excerpt text from the blog
 * @param slug Slug (relative URL) for the post
 * @param title Title of hte blog
 */
const BlogCard: React.FC<{
  date: string
  image?: string
  slug: string
  title: string
}> = ({ date, image, slug, title }) => {
  return (
    <Link to={slug}>
      <div className="BlogCard">
        <img alt="" src={image} />
        <div className="BlogCardContent">
          <h3 className="BlogCardTitle">
            <span className="BlogCardOverlay">{title}</span>
          </h3>
          <div className="BlogCardSpacer" />
          <time className="BlogCardDate" dateTime={date}>
            <span className="BlogCardOverlay">{date}</span>
          </time>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
