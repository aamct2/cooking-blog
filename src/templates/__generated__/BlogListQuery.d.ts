/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogListQuery
// ====================================================

export interface BlogListQuery_allMarkdownRemark_edges_node_frontmatter {
  title: string
  date: any
}

export interface BlogListQuery_allMarkdownRemark_edges_node_fields {
  slug: string
}

export interface BlogListQuery_allMarkdownRemark_edges_node {
  id: string
  frontmatter: BlogListQuery_allMarkdownRemark_edges_node_frontmatter
  fields: BlogListQuery_allMarkdownRemark_edges_node_fields
  excerpt: string | null
}

export interface BlogListQuery_allMarkdownRemark_edges {
  node: BlogListQuery_allMarkdownRemark_edges_node
}

export interface BlogListQuery_allMarkdownRemark {
  edges: BlogListQuery_allMarkdownRemark_edges[]
}

export interface BlogListQuery {
  allMarkdownRemark: BlogListQuery_allMarkdownRemark
}

export interface BlogListQueryVariables {
  skip: number
  limit: number
}
