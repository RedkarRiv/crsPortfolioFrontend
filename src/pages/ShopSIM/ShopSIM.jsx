import React from "react";
import "./ShopSIM.css";
import { Col, Container, Row } from "react-bootstrap";

export const ShopSIM = () => {
  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <Container
        fluid
        className="shopBG m-0 d-flex justify-content-start align-items-center flex-column"
      >
        <Row className="d-flex p-0 m-0 justify-content-center">
          <Col className="shopTitle col-12 p-5">Bienvenido a ShopSIM</Col>
        </Row>
      </Container>
    </>
  );
};
