/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import React from 'react'
import { SEOQuery } from './__generated__/SEOQuery'

interface SEOInput {
  description?: string
  lang?: string
  meta?: any
  title: string
}

function SEO(seoInput: SEOInput) {
  const { site } = useStaticQuery(
    graphql`
      query SEOQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  ) as SEOQuery

  const metaDescription =
    (seoInput.description || site?.siteMetadata?.description) ?? ''
  const lang = seoInput.lang ?? 'en'
  const title = seoInput.title
  const meta = seoInput.meta ?? []

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site?.siteMetadata?.title ?? ''}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site?.siteMetadata?.author ?? '',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
