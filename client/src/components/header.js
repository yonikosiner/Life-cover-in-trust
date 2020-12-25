import React from "react"
import HamburgerMenu from "react-hamburger-menu"
import useWindowSize from "../hooks/useWindowSize"

const size = useWindowSize()

export const Header = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen)
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
    </div>
  )
}
