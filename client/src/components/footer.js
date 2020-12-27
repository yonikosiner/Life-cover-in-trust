import React, { useState } from "react"
import styled from "styled-components"
import { Button } from "react-bootstrap"

const FooterWrapper = styled.footer`
  position: absolute;
  left: 0;
  width: 100%;
  background: #333333;
  overflow-x: hidden;
  @media (min-width: 1080px) {
    /* bottom: -320%; */
  }
  .btn-success {
    background: #23d997;
  }
`

const Write = styled.h1`
  color: #fff;
  font-size: 30px;
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
  const [privacy, setPrivacy] = useState(false)
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
        lifecoverintrust.co.uk is a trading style of Arigal Consulting Ltd which
        is registered in England and Wales, Company No: 09291088. Registered
        Address: 4 Spring Villa Park, Spring Villa Road, Edgware, Middlesex, HA8
        7EB If you are unhappy with our service If you have a complaint about
        your adviser, or any financial advice you have received from your
        adviser, please contact us: Quilter Financial Planning Complaints
        Department, Riverside House, The Waterfront, Newcastle upon Tyne, NE15
        8NY Email: QFPComplaints@quilter.com , Tel: 0191 241 0700 You can find
        more information by visiting the Quilter Financial Planning website:
        http://www.quilterfinancialplanning.co.uk If you cannot settle your
        complaint with us, you may be entitled to refer it to the Financial
        Ombudsman Service (www.financial-ombudsman.org.uk) The guidance provided
        within this website is subject to the uk regulatory regime and is
        therefore primarily targeted at consumers based in the UK.
      </CopyRightDesc>
      <div style={{ cursor: "pointer" }} onClick={() => setPrivacy(!privacy)}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button className="btn-success">See Privacy Policy</Button>
        </div>
        {privacy && (
          <div>
            <h1>Privacy Policy - Life Cover In Trust</h1>
            <p>
              At Arigal Consulting, we respect your privacy and the
              confidentiality of your personal information.
            </p>
            <h2>Who are we?</h2>
            <p>
              Life Cover In Trust is a trading style of Arigal Consulting Ltd
              which is an appointed representative of Quilter Financial Services
              Limited and Quilter Mortgage Planning Limited who are part of the
              Quilter Group of companies.
            </p>
            <p>
              For further details on the companies in our group, please
              <a href="https://www.quilter.com/">click here.</a>
            </p>
            <h2>What data we collect and why?</h2>
            <p>
              We collect personal information about you when you use our
              website, contact us about products and services, visit a financial
              adviser or carry out transactions with us. We collect information
              that is necessary for the provision of financial advice and
              administration of the products or services you are seeking, and
              for legal and regulatory purposes. We also collect and use your
              personal information where necessary to improve our services, our
              business processes, and to communicate with you. For the provision
              of advice we need to collect sensitive information, such as
              information about your health. To do this, we will ask for your
              consent.
            </p>
            <p>
              We will always keep your data safe and secure, and where we share
              your data with other businesses to fulfill the purposes above we
              make sure they follow our instructions and keep your data secure.
              We will never sell your data, and we will not send you
              communications about unrelated services without your consent.
            </p>
            <h2>Find Out More</h2>
            <p>
              Our Privacy Notice which can be accessed by clicking here , holds
              much more information about how we collect, use and share your
              personal information. There is also information about the rights
              you have over your personal data, and how to contact us if you
              have any questions. Please write to:
            </p>
            <p>
              The Office of Data Protection,
              <br />
              Quilter Financial Planning Limited,
              <br />
              Wiltshire Court
              <br />
              Farnsby Street,
              <br />
              Swindon
              <br />
              SN1 5AH
            </p>
            <a href="mailto:QFPDataGuardian@quilter.com">
              QFPDataGuardian@quilter.com
            </a>
            <p>
              Telephone: <a href="tel:0161 488 3559">0161 488 3559</a>
            </p>
          </div>
        )}
      </div>
    </FooterWrapper>
  )
}

export default Footer
