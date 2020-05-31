/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexQuery
// ====================================================

export interface IndexQuery_allMarkdownRemark_edges_node_frontmatter {
  title: string | null
  date: any | null
}

export interface IndexQuery_allMarkdownRemark_edges_node_fields {
  slug: string | null
}

export interface IndexQuery_allMarkdownRemark_edges_node {
  id: string
  frontmatter: IndexQuery_allMarkdownRemark_edges_node_frontmatter | null
  fields: IndexQuery_allMarkdownRemark_edges_node_fields | null
  excerpt: string | null
}

export interface IndexQuery_allMarkdownRemark_edges {
  node: IndexQuery_allMarkdownRemark_edges_node
}

export interface IndexQuery_allMarkdownRemark {
  totalCount: number
  edges: IndexQuery_allMarkdownRemark_edges[]
}

export interface IndexQuery {
  allMarkdownRemark: IndexQuery_allMarkdownRemark
}
