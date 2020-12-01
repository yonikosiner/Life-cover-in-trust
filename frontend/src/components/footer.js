import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  position: absolute;
  left: 0;
  width: 100%;
  background: #333333;
  bottom: -649%;
  @media (min-width: 1080px) {
    bottom: -320%;
  }
`

const Write = styled.h1`
  color: #fff;
  font-size: 35px;
  text-align: center;
  a {
    color: #23d997;
    text-decoration: none;
    transition: 0.2s ease all;
    &:hover {
      text-decoration: underline;
    }
  }
`
const CopyRightYear = styled.p`
  font-size: 35px;
  text-align: center;
`

const CopyRightDesc = styled.p`
  font-size: 18px;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Write>
        Created by{" "}
        <span>
          <a href="https://yoni-portfolio.netlify.app" target=" _blank">
            Yoni Kosiner
          </a>
        </span>
      </Write>
      <CopyRightYear>©2020</CopyRightYear>
      <CopyRightDesc>
        Arigal Consulting Ltd is an appointed representative of Quilter
        Financial Services Limited and Quilter Mortgage Planning Limited, which
        are authorised and regulated by the Financial Conduct Authority. Quilter
        Financial Services Limited and Quilter Mortgage Planning Limited are
        entered on the FCA register (https://register.fca.org.uk/s) under
        references 440703 and 440718. Registered as a company in England & Wales
        No: 09291088. Registered address 4 Spring Villa Park, Spring Villa Road,
        Edgware, Middlesex, HA8 7EB. The guidance and/or advice contained within
        this website is subject to the UK regulatory regime, and is therefore
        targeted at consumers based in the UK.
      </CopyRightDesc>
    </FooterWrapper>
  )
}

export default Footer
