import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Description from "../components/description"
import Contact from "../components/contact"
import Footer from "../components/footer"
import ScrollTop from "../components/scrollTop"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Description />
      <Contact />
      <Footer />
      <ScrollTop />
    </Layout>
  )
}

export default IndexPage
