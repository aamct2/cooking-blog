/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'
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
      <NavBar />
      <Header siteTitle={data.site?.siteMetadata?.title ?? ''} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
