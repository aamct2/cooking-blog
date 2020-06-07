/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPostQuery
// ====================================================

export interface BlogPostQuery_siteData_siteMetadata {
  author: string
}

export interface BlogPostQuery_siteData {
  siteMetadata: BlogPostQuery_siteData_siteMetadata
}

export interface BlogPostQuery_post_frontmatter {
  title: string
  date: any
  tags: (string | null)[] | null
}

export interface BlogPostQuery_post {
  html: string | null
  frontmatter: BlogPostQuery_post_frontmatter
}

export interface BlogPostQuery {
  siteData: BlogPostQuery_siteData | null
  post: BlogPostQuery_post | null
}

export interface BlogPostQueryVariables {
  slug: string
}
