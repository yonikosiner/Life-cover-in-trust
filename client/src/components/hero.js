import React from "react"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import plantMoney from "../images/plant.jpg"

const Main = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  overflow: hidden;
  .btn-success {
    background-color: #23d997;
  }
  .btn-success:hover {
    background-color: green;
  }
`

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  overflow: hidden;
  z-index: 2;
  span {
    color: #23d997;
    font-weight: 700;
  }
`
const Img = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    object-fit: cover;
    transition: 0.1s ease all;
  }
  img:hover {
    transform: scale(0.9);
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
        <p>
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
        <img src={plantMoney} alt="" />
      </Img>
    </Main>
  )
}
