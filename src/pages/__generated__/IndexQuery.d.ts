/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexQuery
// ====================================================

export interface IndexQuery_allMarkdownRemark_edges_node_frontmatter_featuredImage_childImageSharp_fixed {
  src: string
}

export interface IndexQuery_allMarkdownRemark_edges_node_frontmatter_featuredImage_childImageSharp {
  fixed: IndexQuery_allMarkdownRemark_edges_node_frontmatter_featuredImage_childImageSharp_fixed | null
}

export interface IndexQuery_allMarkdownRemark_edges_node_frontmatter_featuredImage {
  childImageSharp: IndexQuery_allMarkdownRemark_edges_node_frontmatter_featuredImage_childImageSharp | null
}

export interface IndexQuery_allMarkdownRemark_edges_node_frontmatter {
  title: string
  date: any
  featuredImage: IndexQuery_allMarkdownRemark_edges_node_frontmatter_featuredImage
}

export interface IndexQuery_allMarkdownRemark_edges_node_fields {
  slug: string
}

export interface IndexQuery_allMarkdownRemark_edges_node {
  id: string
  frontmatter: IndexQuery_allMarkdownRemark_edges_node_frontmatter
  fields: IndexQuery_allMarkdownRemark_edges_node_fields
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
