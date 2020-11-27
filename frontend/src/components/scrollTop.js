import React from "react"
import up from "../images/scrollTop.svg"
import styled from "styled-components"

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
const ScrollTop = () => {
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
    <div onClick={topFunction}>
      <Up id="myBtn" src={up}></Up>
    </div>
  )
}

export default ScrollTop
