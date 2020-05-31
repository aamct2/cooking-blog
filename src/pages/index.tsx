import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Aaron's cooking blog</h1>
    <p>
      This site contains a record of some of my cooking and baking projects.
    </p>
  </Layout>
)

export default IndexPage
