import React from "react";
import "./AboutMeSlide.css";
import { Col, Row } from "react-bootstrap";

export const AboutMeSlide = () => {
  return (
    <>
      <div className="techTitle d-flex text-center justify-content-center pt-5 mt-5">
        Acerca de mí
      </div>
      <Row className="aboutMeBG w-100 m-0 mb-4 p-0 d-flex justify-content-center">
        <Col className="col-12 col-md-4 d-flex justify-content-center align-items-start pt-4">
          <div className="techLabel"></div>
        </Col>
        <Col className="col-12 col-md-4 d-flex justify-content-center align-items-start pt-4">
          <div className="techLabel"></div>
        </Col>{" "}
        <Col className="col-12 col-md-4 d-flex justify-content-center align-items-start pt-4">
          <div className="techLabel"></div>
        </Col>
      </Row>
    </>
  );
};
