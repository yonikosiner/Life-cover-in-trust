import React from "react"
import styled from "styled-components"
import './header.css'

const NavBar = styled.nav`
  background-color: #333333;
  position: absolute;
  width: 100%;
  height: 139px;
  top: 0;
  left: 0;
  position: sticky;
  span {
    display: inline-block;
    cursor: pointer;
    width: 45px;
    height: 4px;
    background-color: #23d997;
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
`

const Header = () => {
  const aboutUs = () => {
    const read = document.getElementById("description")
    read.scrollIntoView({ behavior: "smooth" })
  }
  const contactUs = () => {
    const contact = document.getElementById("contact")
    contact.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <NavBar>
      <MenuWrapper>
        <Menu></Menu>
        <br />{" "}
        <span>
          <div className="menu"></div>
        </span>
        <br /> <Menu></Menu>
      </MenuWrapper>
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
