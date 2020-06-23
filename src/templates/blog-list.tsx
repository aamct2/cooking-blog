import Layout from '../components/Layout'
// This must be imported first to ensure CSS order in production builds

// eslint-disable-next-line sort-imports
import { Link, graphql } from 'gatsby'
import BlogCard from '../components/BlogCard'
import { BlogListQuery } from './__generated__/BlogListQuery'
import React from 'react'
import SEO from '../components/SEO'

/**
 * Template page containing a list of blog posts
 */
const BlogList: React.FC<{
  data: BlogListQuery
  pageContext: { currentPage: number; numPages: number }
}> = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/blog' : '../' + (currentPage - 1).toString()
  const nextPage = (isFirst ? '/blog/' : '../') + (currentPage + 1).toString()

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>

      {posts.map(({ node }) => {
        return (
          <BlogCard
            date={node.frontmatter.date}
            key={node.id}
            image={node.frontmatter.featuredImage.childImageSharp?.fixed?.src}
            slug={node.fields.slug}
            title={node.frontmatter.title}
          />
        )
      })}

      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {/* {Array.from({ length: numPages }, (_, i) => (
        <Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? '' : i + 1}`}>
          {i + 1}
        </Link>
      ))} */}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </Layout>
  )
}

export default BlogList

export const blogListQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "yyyy-MM-DD")
            featuredImage {
              childImageSharp {
                fixed(width: 720) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
