import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => (
  <footer className="page-footer font-small blue py-3 footerBG">
    <Container fluid className="d-flex justify-content-around align-items-center">
      <Row className="p-0 m-0 w-100 d-flex justify-content-around align-items-center">
        <Col className="col-md-4 mt-md-0 d-flex justify-content-center align-items-center">
          <ul className="list-unstyled d-flex flex-column m-0">
            <li>
              <div>Aviso legal</div>
            </li>
            <li>
              <div>Política de privacidad</div>
            </li>
          </ul>
        </Col>
        <hr className="clearfix w-100 d-md-none pb-0" />
        <Col className="col-md-4 mb-md-0 mb-3 d-flex justify-content-center align-items-center">
          <div>
            <div>Designed by </div>
            <h5 className="text-uppercase">Carlos Redondo</h5>
          </div>
        </Col>
        <Col className="col-md-3 mb-md-0 d-flex justify-content-center align-items-center">
          <ul className="list-unstyled m-0 text-center">
            <li>
              <div>Linkedin</div>
            </li>
            <li>
              <div>GitHub</div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
