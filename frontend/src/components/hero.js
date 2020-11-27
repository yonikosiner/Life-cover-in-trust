import React from "react"
import styled from "styled-components"
import plantMoney from "../images/plant.jpg"

const Center = styled.div`
  @media (min-width: 1080px) {
    position: absolute;
    top: 35%;
    float: left;
    display: flex;
  }
`

// Title
const Title = styled.h1`
  font-size: 39px;
  margin: 25px;
  text-align: center;
  span {
    color: #23d997;
  }
  @media (min-width: 1080px) {
    text-align: justify;
    font-size: 50px;
  }
`

const CenterDescription = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 1080px) {
    position: absolute;
    left: 5%;
    top: 85%;
  }
`

// First p tag of the website
const Description = styled.p`
  font-size: 20px;
  width: 100%;
`

const ButtonCenter = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  @media (min-width: 1080px) {
    position: absolute;
    left: -14%;
    top: 180%;
    width: 100%;
  }
`

const ReadMore = styled.button`
  outline: none;
  text-align: center;
  cursor: pointer;
  border: 5px solid #23d997;
  width: 30%;
  background-color: #1b1b1b;
  color: #fff;
  transition: 0.4s ease all;
  &:hover {
    background-color: #23d997;
    transform: scale(1.1);
  }
  @media (max-width: 769px) {
    background-color: #23d997;
  }
`

const ContactUs = styled.button`
  outline: none;
  text-align: center;
  cursor: pointer;
  border: 5px solid #23d997;
  width: 30%;
  background-color: #1b1b1b;
  color: #fff;
  margin-left: 15px;
  transition: 0.4s ease all;
  &:hover {
    transform: scale(1.1);
    background-color: #23d997;
  }
  @media (max-width: 769px) {
    background-color: #23d997;
  }
`

// Image
const Image = styled.div`
  position: absolute;
  width: 100%;
  top: -60%;
  left: 150%;
  z-index: 99;
`
const Hero = () => {
  // Scroll down to description
  const readMore = () => {
    const read = document.getElementById("description")
    read.scrollIntoView({ behavior: "smooth" })
  }
  // Scroll down to contact
  const contactUs = () => {
    const contact = document.getElementById("contact")
    contact.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Center>
      <Title>
        Life Cover <span>In Trust</span>
      </Title>
      <CenterDescription>
        <Description>
          Life insurance is used to provide a lump <br /> sum or in some cases a
          regular income <br />
          if you pass away during the plan term.
        </Description>

        <Image>
          <img src={plantMoney} alt="Plant money" />
        </Image>
      </CenterDescription>
      <ButtonCenter>
        <ReadMore onClick={readMore}>Read More</ReadMore>
        <ContactUs onClick={contactUs}>Contact us</ContactUs>
      </ButtonCenter>
    </Center>
  )
}

export default Hero
