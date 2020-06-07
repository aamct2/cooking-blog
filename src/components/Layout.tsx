import { graphql, useStaticQuery } from 'gatsby'
import Footer from './Footer'
import Header from './Header'
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
      {/* <NavBar /> */}
      <Header siteTitle={data.site?.siteMetadata?.title ?? ''} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
