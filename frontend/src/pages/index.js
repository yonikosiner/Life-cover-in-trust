import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Description from "../components/description"
import Contact from "../components/contact"
import Footer from "../components/footer"
import up from "../images/scrollTop.svg"

const Up = styled.img`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;
`

const IndexPage = () => {
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction()
  }

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("myBtn").style.display = "block"
    } else {
      document.getElementById("myBtn").style.display = "none"
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Description />
      <Contact />
      <div onClick={topFunction}>
        <Up id="myBtn" src={up} alt="" />
      </div>
      <Footer />
    </Layout>
  )
}

export default IndexPage
