/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ImageQuery
// ====================================================

export interface ImageQuery_placeholderImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface ImageQuery_placeholderImage_childImageSharp {
  fluid: ImageQuery_placeholderImage_childImageSharp_fluid | null;
}

export interface ImageQuery_placeholderImage {
  childImageSharp: ImageQuery_placeholderImage_childImageSharp | null;
}

export interface ImageQuery {
  placeholderImage: ImageQuery_placeholderImage | null;
}
