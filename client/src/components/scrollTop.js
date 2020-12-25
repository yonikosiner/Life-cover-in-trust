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
const Down = styled.button`
  display: none;
  position: fixed;
  bottom: 3%;
  right: 90px;
  z-index: 99;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;
  background: #23d997;
  color: #ffff;
  border: 5px solid #23d997;
  padding: 5px;
  transition: 0.3s ease all;
`
const ScrollTop = () => {
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction()
  }

  //   window.addEventListener('scroll', function (event) {
  //   i{
  //     alert('You are at the bottom of page!');
  //   }
  // });

  const scrollFunction = e => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("myBtn").style.display = "block"
      document.getElementById("down").style.display = "block"
    } else {
      document.getElementById("myBtn").style.display = "none"
      document.getElementById("down").style.display = "none"
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const contactFunction = () => {
    const contact = document.getElementById("contact")
    contact.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div>
      <div onClick={topFunction}>
        <Up id="myBtn" src={up}></Up>
      </div>
      <Down id="down" onClick={contactFunction}>
        Contact us
      </Down>
    </div>
  )
}

export default ScrollTop
