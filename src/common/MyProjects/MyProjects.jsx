import React from "react";
import "./MyProjects.css";
import { Col, Row } from "react-bootstrap";

export const MyProjects = () => {
  return (
    <>
      <Row className="myProjectsBG d-flex m-0 py-5">
        <Col className="col-12 m-0 p-0 d-flex justify-content-start align-items-center flex-column">
          <Row className="d-flex w-75 h-50 my-2">
            <Col className="col-12 col-md-6 projectImage">IMAGEN</Col>
            <Col className="col-12 col-md-6 projectDescription">DESCRIPCION</Col>
          </Row>
          <Row className="d-flex w-75 h-50 my-2">
            <Col className="col-12 col-md-6 projectImage">IMAGEN</Col>
            <Col className="col-12 col-md-6  projectDescription">DESCRIPCION</Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
