import React from "react"
import "../styles/yoni.min.css"

export const Menu = ({ isOpen, setIsOpen }) => {
  const about = () => {
    const read = document.getElementById("description")
    read.scrollIntoView({ behavior: "smooth" })
    setIsOpen(!isOpen)
  }

  const contact = () => {
    const read = document.getElementById("contact")
    read.scrollIntoView({ behavior: "smooth" })
    setIsOpen(!isOpen)
  }

  return (
    <div
      style={{ position: "absolute", top: "5%", fontSize: "25px" }}
      className="wid-100 bg-black"
    >
      <ul style={{ listStyle: "none" }}>
        <li onClick={about}>About</li>
        <li onClick={contact}>Contact</li>
      </ul>
    </div>
  )
}
