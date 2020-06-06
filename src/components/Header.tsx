import './Header.scss'
import { Link } from 'gatsby'
import React from 'react'

/**
 * Header of a page
 * @param siteTitle Title of the website
 */
const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <header className="Header">
    <h1 style={{ margin: 0 }}>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
)

export default Header
