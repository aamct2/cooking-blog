import './Tag.scss'
import { Link } from 'gatsby'
import React from 'react'

/**
 * Tag component
 */
const Tag: React.FC<{ link: string; name: string }> = ({ link, name }) => {
  return (
    <Link to={link}>
      <div className="Tag">{name}</div>
    </Link>
  )
}

export default Tag
