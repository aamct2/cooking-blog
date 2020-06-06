import './NavBar.scss'
import { Link } from 'gatsby'
import React from 'react'

/**
 * Links to generate in the `NavBar`
 */
const NavigationLinks = [
  {
    to: '/blog',
    name: 'Blog',
  },
  {
    to: '/about',
    name: 'About',
  },
]

/**
 * Navigation bar
 */
const NavBar: React.FC = () => {
  return (
    <nav className="NavBar">
      <ul>
        {NavigationLinks.map(link => (
          <li key={link.to}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
