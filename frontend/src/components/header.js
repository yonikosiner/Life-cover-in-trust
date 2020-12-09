import React, { useState } from "react"
import styled from "styled-components"
import './header.css'
import {
  isMobile
} from "react-device-detect"

const NavBar = styled.nav`
  background-color: #333333;
  width: 100%;
  height: 139px;
  top: 0;
  left: 0;
  z-index: 100;
  position: fixed;
  span {
    display: inline-block;
    cursor: pointer;
    width: 45px;
    height: 4px;
    background-color: #23d997;
    outline: none;
  }
  @media (max-width: 769px) {
    position: absolute;
  }
`

const Links = styled.li`
  display: block;
  position: absolute;
  right: 5%;
  top: 30%;
  font-size: 30px;
  width: 30%;
  display: none;
  overflow: hidden;
  div {
    color: #fff;
    border: none;
    cursor: pointer;
    outline: none;
  }
  @media (min-width: 1080px) {
    display: block;
  }
`

const Links2 = styled.li`
  display: block;
  position: absolute;
  right: -6%;

  top: 30%;
  font-size: 30px; width: 30%; display: none; div { color: #fff; border: none; cursor: pointer; outline: none; }
          @media (min-width: 1080px) {
    display: block;
  }
`

const MenuWrapper = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  z-index: 200;
  @media (min-width: 1080px) {
    display: none;
  }
`

const MenuNav = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 100px;
`

const Menu = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 45px;
  height: 4px;
  margin-top: 10px;
  background-color: #fff;
  outline: none;
`

const Inside = styled.div`
  .inside {
    overflow: hidden;
    position: fixed;
    right: 0;
    width: 80%;
    height: 530%;
    background-color: #555;
    -webkit-animation: linear alternate;
    -webkit-animation-name: run;
    -webkit-animation-duration: 0.2s;
    @keyframes run {
      from {
        opacity: 0;
        transform: scale(0.1);
        left: 90%;
      }
      to {
        opacity: 1;
        left: 200px;
      }
    }
  }
  button {
    background: none;
    color: #fff;
    outline: none;
    width: 50%;
    margin-top: 10%;
    border: none;
    background-color: #23d997;
  }
  .block {
    display: block;
  }
  .none {
    display: none;
  }
  .links {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30%;
  }
`


const Header = () => {
  const aboutUs = () => {
    // Check if user is on mobile
    {isMobile ? setIsOpen(!isOpen) : ""}
    const read = document.getElementById("description")
    read.scrollIntoView({ behavior: "smooth" })
  }
  const contactUs = () => {
    // Check if the user is on mobile 
    {isMobile ? setIsOpen(!isOpen) : ""}
    const contact = document.getElementById("contact")
    contact.scrollIntoView({ behavior: "smooth" })
  }
  // Hambuger menu
  // Menuy state
  const [isOpen, setIsOpen] = useState(false)
  // Togle state
  const menuOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <NavBar id="nav" className={isOpen ? "stick" : ""}> 
      <MenuWrapper onClick={menuOpen}>
        <Menu></Menu>
        <br />{" "}
        <span>
          <div className="menu"></div>
        </span>
        <br /> <Menu></Menu>
      </MenuWrapper>
      <Inside>
        <div className={isOpen ? "inside" : ""}>
          <div className="links"> 
            <button className={isOpen ? "block" : "none"} onClick={aboutUs}>About</button>
            <button className={isOpen ? "block" : "none"} onClick={contactUs}>Contact</button>
          </div>
        </div>
      </Inside>
      <MenuNav>
        <ul>
          <Links>
            <div
              // role="page"
              className="underline"
              onClick={aboutUs}
              onKeyDown={aboutUs}
            >
              About
            </div>
          </Links>
          <Links2>
            <div
              className="underline"
              onClick={contactUs}
              onKeyDown={contactUs}
            >
              Contact
            </div>
          </Links2>
        </ul>
      </MenuNav>
    </NavBar>
  )
}

export default Header
