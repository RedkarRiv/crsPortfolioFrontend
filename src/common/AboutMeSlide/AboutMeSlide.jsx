import React from "react";
import "./AboutMeSlide.css";
import { Col, Row } from "react-bootstrap";

export const AboutMeSlide = () => {
  return (
    <>
      <Row className="aboutMeBG m-0 mb-4 p-0 d-flex justify-content-center">
        <Col className="col-12 techTitle d-flex text-center justify-content-center pt-5">
          Acerca de mí
        </Col>
        <Col className="col-12 col-md-4 d-flex justify-content-center align-items-start pt-4">
          <div className="techLabel"></div>
        </Col>
        <Col className="col-12 col-md-4 d-flex justify-content-center align-items-start pt-4">
          <div className="techLabel"></div>
        </Col>{" "}
        <Col className="col-12 col-md-4 d-flex justify-content-center align-items-start pt-4">
          <div className="techLabel"></div>
        </Col>
        <Col className="col-12 downloadFilesContainer d-flex justify-content-center align-items-center">
          <div className="fileDownload">Curriculum Vitae</div>
        </Col>
      </Row>
    </>
  );
};
