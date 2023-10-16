import React from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <>
      <div className="containerhome d-flex justify-content-center align-items-start">
        <Container className="d-flex m-0 p-0 b-0">
          <Row className="d-flex w-100 m-0 p-0">
            <Col className="slidePhoto col-6"></Col>
            <Col className="slideDescription col-6 d-flex align-items-center justify-content-center">
              <div className="text-light text-center h3 h-50 w-100 px-4">
                {" "}
                Esto es un texto generico de prueba prueba
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
