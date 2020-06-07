import Layout from '../components/Layout'
import React from 'react'
import SEO from '../components/SEO'

/**
 * An about page
 */
const About: React.FC = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <section>
        <p>
          In 2020 I decided to learn more about making French pastry. I picked
          up a copy of{' '}
          <a href="https://www.amazon.co.uk/French-Pâtisserie-Techniques-Ferrandi-Culinary/dp/2080203185">
            French Pâtisserie: Master Recipes and Techniques from the Ferrandi
            School of Culinary Arts
          </a>
          . In doing this, I wanted to a place to record what I had made.
        </p>
        <p>
          This was not the first time I decided to focus on a specific form of
          cooking or baking. In 2006 I spent a summer baking bread every day.
          Another time I learned about stir fry. Most recently I tried a wide
          variety of ways to roast potatoes.
        </p>
      </section>
    </Layout>
  )
}

export default About
