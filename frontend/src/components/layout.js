import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import GlobalStyle from "./globalStyles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const aboutSection = e => {
  //   const location = window.location.href
  //   if (location === "http://localhost:8000/#aboutsection") {
  //   }
  // }
  const setHome = () => {
    window.location.href = "/#home"
  }
  // window.addEventListener("scroll", aboutSection, { passive: true })
  window.onload = setHome
  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        {/* {new Date().getFullYear(} */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
