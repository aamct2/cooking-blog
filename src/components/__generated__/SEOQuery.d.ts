/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SEOQuery
// ====================================================

export interface SEOQuery_site_siteMetadata {
  title: string
  description: string
  author: string
  siteUrl: string
}

export interface SEOQuery_site {
  siteMetadata: SEOQuery_site_siteMetadata
}

export interface SEOQuery {
  site: SEOQuery_site | null
}
