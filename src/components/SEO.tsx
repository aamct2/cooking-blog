import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import React from 'react'
import { SEOQuery } from './__generated__/SEOQuery'

/**
 * Represents a single metadata item
 */
interface MetadataItem {
  /**
   * Name of the metadata tag
   */
  name: string
  /**
   * Contents of the metadata tag
   */
  content: string
}

/**
 * Collection of metadata information to place in the header.
 */
interface SEOInput {
  /**
   * Short description of the page.
   */
  description?: string
  /**
   * Language for the page.
   */
  lang?: string
  /**
   * Additional metadata to be added to the autogenerated collection.
   */
  meta?: MetadataItem[]
  /**
   * Title of the page.
   */
  title: string
  /**
   * Type of page. Defaults to `website`.
   */
  type?: string
}

/**
 * Automatically generate SEO metadata for a page.
 * @param seoInput Collection of metadata information to place in the header.
 */
function SEO(seoInput: SEOInput): JSX.Element {
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
  const meta = seoInput.meta ?? []
  const title = seoInput.title
  const type = seoInput.type ?? 'website'

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
          content: type,
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
