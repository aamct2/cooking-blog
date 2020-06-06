/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TagsQuery
// ====================================================

export interface TagsQuery_allMarkdownRemark_edges_node_fields {
  slug: string
}

export interface TagsQuery_allMarkdownRemark_edges_node_frontmatter {
  title: string
  date: any
}

export interface TagsQuery_allMarkdownRemark_edges_node {
  fields: TagsQuery_allMarkdownRemark_edges_node_fields
  frontmatter: TagsQuery_allMarkdownRemark_edges_node_frontmatter
}

export interface TagsQuery_allMarkdownRemark_edges {
  node: TagsQuery_allMarkdownRemark_edges_node
}

export interface TagsQuery_allMarkdownRemark {
  totalCount: number
  edges: TagsQuery_allMarkdownRemark_edges[]
}

export interface TagsQuery {
  allMarkdownRemark: TagsQuery_allMarkdownRemark
}

export interface TagsQueryVariables {
  tag?: string | null
}
