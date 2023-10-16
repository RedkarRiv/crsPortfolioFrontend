import React from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <>
      <div className="containerhome d-flex justify-content-center align-items-start">
        <Container className="m-0">
          <Row className="w-100 m-0 p-0">
            <Col className="slidePhoto col-6"></Col>
            <Col className="slideDescription col-6 d-flex align-items-center justify-content-center flex-column">
              <div className="d-flex align-items-start flex-column h-50">
                <div className="homeTitleDesign"> Carlos Redondo </div>
                <div className="homeSubtitleDesign">Junior Developer </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
