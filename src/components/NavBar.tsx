import './NavBar.scss'
import { Link } from 'gatsby'
import React from 'react'

/**
 *
 */
const NavBar: React.FC = () => {
  return (
    <nav className="NavBar">
      <Link to="/blog">Blog</Link>
    </nav>
  )
}

export default NavBar
