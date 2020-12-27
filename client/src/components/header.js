import React from "react"
import HamburgerMenu from "react-hamburger-menu"
import useWindowSize from "../hooks/useWindowSize"

export const Header = ({ isOpen, setIsOpen }) => {
  const size = useWindowSize()
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const about = () => {
    const read = document.getElementById("description")
    read.scrollIntoView({ behavior: "smooth" })
  }

  const contact = () => {
    const read = document.getElementById("contact")
    read.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div
      style={{
        background: "#333",
        position: "absolute",
        top: "0",
        marginTop: "0",
        width: "100%",
      }}
    >
      {/* Checking to see if size is less than 1025px */}
      {size.width < 1025 && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "14px",
          }}
        >
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={handleClick}
            width={25}
            height={20}
            strokeWidth={1}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.4}
            className="burger"
          />
        </div>
      )}
      {/* Check to see if the size is bigger then 1025 */}
      {size.width > 1025 && (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <p
              className="navbar-brand"
              style={{ textTransform: "uppercase", letterSpacing: "5px" }}
            >
              Life Cover <span style={{ color: "#23d997" }}>In Trust</span>
            </p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav">
              <li className="nav-item">
                <p
                  style={{ cursor: "pointer" }}
                  className="nav-link"
                  onClick={about}
                >
                  About
                </p>
              </li>
              <li className="nav-item">
                <p
                  style={{ cursor: "pointer" }}
                  className="nav-link"
                  onClick={contact}
                >
                  Contact
                </p>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  )
}
