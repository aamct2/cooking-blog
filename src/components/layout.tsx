/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'
import Header from './header'
import PropTypes from 'prop-types'
import React from 'react'
import { SiteTitleQuery } from './__generated__/SiteTitleQuery'

/**
 * Standard page layout template
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) as SiteTitleQuery

  return (
    <>
      <Header siteTitle={data.site?.siteMetadata?.title ?? ''} />
      <>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
