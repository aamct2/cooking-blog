/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPostQuery
// ====================================================

export interface BlogPostQuery_markdownRemark_frontmatter {
  title: string
  date: any
  tags: (string | null)[] | null
}

export interface BlogPostQuery_markdownRemark {
  html: string | null
  frontmatter: BlogPostQuery_markdownRemark_frontmatter
}

export interface BlogPostQuery {
  markdownRemark: BlogPostQuery_markdownRemark | null
}

export interface BlogPostQueryVariables {
  slug: string
}
