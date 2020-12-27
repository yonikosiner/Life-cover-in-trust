import React from "react"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import money from "../images/money.jpg"

const Main = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 10rem;
  width: 70rem;
  color: white;
  overflow: hidden;
  .btn-success {
    background-color: #23d997;
  }
  .btn-success:hover {
    background-color: green;
  }
  @media (max-width: 1025px) {
    width: 30rem;
    padding: 5rem 5rem;
  }
`

const Description = styled.div`
  flex: 3;
  padding-right: 5rem;
  overflow: hidden;
  z-index: 2;
  span {
    color: #23d997;
    font-weight: 700;
  }
  @media (max-width: 1025px) {
    width: 100%;
  }
  h1 {
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
    font-size: 34px;
  }
`
const Img = styled.div`
  flex: 5;
  overflow: hidden;
  z-index: 2;
  img {
    object-fit: cover;
    transition: 0.1s ease all;
  }
  @media (max-width: 1025px) {
    display: none;
  }
`

export const Hero = () => {
  // Scroll down so the user can read more
  const readMore = () => {
    const read = document.getElementById("description")
    read.scrollIntoView({ behavior: "smooth" })
  }

  // Scroll down so the user can contact
  const contactUs = () => {
    const read = document.getElementById("contact")
    read.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <Main>
      <Description>
        <h1>
          Life Cover <span>In Trust</span>
        </h1>
        <p style={{ textAlign: "justify" }}>
          It is <span>imperative</span> that life insurance is{" "}
          <span>put into trust</span> to ensure a <span>speedy payout</span> to
          who you want the lump sum to go to, <span>without any worry</span> of
          the monies being taxed at a later point
        </p>
        <div className="d-flex flex-colum">
          <Button
            onClick={readMore}
            className="btn-success mr-3"
            style={{ width: "200%" }}
          >
            Read More
          </Button>
          <Button
            onClick={contactUs}
            className="btn-success"
            style={{ width: "200%" }}
          >
            Contact US
          </Button>
        </div>
      </Description>
      <Img>
        <img src={money} alt="image of money" />
      </Img>
    </Main>
  )
}
