import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import gitLogo from "../../img/gitLogo.png";
import linkedinLogo from "../../img/linkedinLogo.png";
import signatureCRS from "../../img/carlosRedondoSignature.png"

const Footer = () => (
  <footer className="page-footer font-small blue py-2 footerBG">
    <Container
      fluid
      className="d-flex justify-content-around align-items-center"
    >
      <Row className="p-0 m-0 w-100 d-flex justify-content-around align-items-center">
        <hr className="clearfix w-100 d-md-none pb-0" />
        <Col className="col-12 col-md-4 mb-md-0 mb-3 d-flex justify-content-center align-items-center">
          <div className="me-3">Designed by </div>
          <img alt="Carlos Redondo" className="signatureDesign" src={signatureCRS}/>
        </Col>
        <Col className="col-md-3 mb-md-0 d-flex justify-content-center align-items-center">
          <div className="d-flex m-0 text-center w-50 justify-content-end">
            <div className="d-flex justify-content-center align-items-center me-2">
              <a href="https://github.com/RedkarRiv" target="_blank">
                <img src={gitLogo} className="logoResize p-1" />
              </a>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <a href="https://www.linkedin.com/in/crs5" target="_blank">
                <img src={linkedinLogo} className="logoResize2" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
