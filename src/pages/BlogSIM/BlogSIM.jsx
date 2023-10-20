import React from "react";
import "./BlogSIM.css";
import { Col, Container, Row } from "react-bootstrap";

export const BlogSIM = () => {
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
        className="blogBG m-0 d-flex justify-content-start align-items-center flex-column"
      >
        <Row className="d-flex p-0 m-0 justify-content-center">
          <Col className="blogTitle col-12 p-5">Bienvenido a BlogSIM</Col>
        </Row>
      </Container>
    </>
  );
};
