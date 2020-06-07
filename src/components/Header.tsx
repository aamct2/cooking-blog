import './Header.scss'
import { Link } from 'gatsby'
import NavBar from './NavBar'
import React from 'react'

/**
 * Header of a page
 * @param siteTitle Title of the website
 */
const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <header>
    <div className="SiteTitle">
      <Link to="/">{siteTitle}</Link>
    </div>
    <NavBar />
  </header>
)

export default Header
