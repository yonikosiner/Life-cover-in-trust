import React from "react"
import styled from "styled-components"

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
  font-size: 30px;
  width: 30%;
  display: none;
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
  .underline {
    display: inline;
    position: relative;
    overflow: hidden;
  }
  .underline:after {
    content: "";
    position: absolute;
    z-index: -1;
    right: 0;
    width: 0;
    bottom: -5px;
    background: #23d997;
    height: 4px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  .underline:hover:after,
  .underline:focus:after,
  .underline:active:after {
    left: 0;
    right: auto;
    width: 100%;
  }
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
