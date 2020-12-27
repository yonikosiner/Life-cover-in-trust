import React from "react"
import styled from "styled-components"

// Div around all contact to place it at the bottom
const ContactWrapper = styled.div`
  position: static;
  margin-top: 10%;
  left: 0;
  height: 100%;
  width: 100%;
  @media (min-width: 1080px) {
    bottom: -320%;
  }
`

// Div around title to center it
const TitleWrapper = styled.div`
  text-align: center;
`

// Title
const Title = styled.h1`
  font-size: 50px;
  span {
    color: #23d997;
  }
`
// Dib around all inputs to center them
const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
// Name & Email
const Input = styled.input`
  margin-bottom: 8%;
  border: none;
  outline: none;
  background-color: #3e3e3e;
  box-shadow: 10px 10px 100px #d3cfcf;
  width: 300px;
  height: 48px;
  color: #fff;
  transition: 0.2s ease all;
  border-radius: 5px;
  &:hover {
    transform: scale(1.2);
  }
  @media (min-width: 1080px) {
    margin-bottom: 24px;
    &:hover {
      transform: scale(1);
    }
  }
`

// Message
const Message = styled.textarea`
  margin-bottom: 8%;
  border: none;
  outline: none;
  background-color: #3e3e3e;
  box-shadow: 10px 10px 100px #d3cfcf;
  width: 300px;
  height: 228px;
  color: #fff;
  transition: 0.2s ease all;
  border-radius: 10px;
  &:hover {
    transform: scale(1.2);
  }
`

// Submit button

const Submit = styled.input`
  border: 5px solid #23d997;
  background: none;
  cursor: pointer;
  color: #fff;
  outline: none;
  transition: 0.3s ease all;
  padding: 5px;
  &:hover {
    background-color: #23d997;
    transform: scale(1.2);
  }
`

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <TitleWrapper>
        <Title>
          Contact <span>Us</span>
        </Title>
      </TitleWrapper>
      <InputWrapper method="POST" action="http://localhost:3000/contact">
        <Input type="text" name="name" placeholder="Name:" />
        <Input type="email" name="email" placeholder="Email:" />
        <Input type="text" name="phone" placeholder="Phone:" />
        <Message
          type="text"
          name="message"
          cols="60"
          rows="5"
          placeholder="Message:"
        ></Message>
        <Submit type="Submit" placeholder="submit" />
      </InputWrapper>
    </ContactWrapper>
  )
}

export default Contact
