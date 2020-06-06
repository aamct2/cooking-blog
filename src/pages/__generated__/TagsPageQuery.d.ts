/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TagsPageQuery
// ====================================================

export interface TagsPageQuery_allMarkdownRemark_group {
  fieldValue: string | null
  totalCount: number
}

export interface TagsPageQuery_allMarkdownRemark {
  group: TagsPageQuery_allMarkdownRemark_group[]
}

export interface TagsPageQuery {
  allMarkdownRemark: TagsPageQuery_allMarkdownRemark
}
