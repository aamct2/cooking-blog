import { Link } from 'gatsby'
import React from 'react'

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

export default Header