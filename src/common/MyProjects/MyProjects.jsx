import React from "react";
import "./MyProjects.css";
import { Col, Row } from "react-bootstrap";

export const MyProjects = () => {
  return (
    <>
      <Row className="myProjectsBG d-flex m-0 px-3 py-5">
        <Col className="col-12 techTitle d-flex text-center justify-content-center p-0 px-0 m-0">
          Mis proyectos{" "}
        </Col>
        <Col className="col-12 m-0 p-0 d-flex justify-content-start align-items-center flex-column">
          <Row className="d-flex my-2 projectSlide">
            <Col className="col-12 col-md-6 projectImage m-0 p-0">IMAGEN</Col>
            <Col className="col-12 col-md-6 projectDescription m-0 p-0">
              DESCRIPCION
            </Col>
          </Row>
          <Row className="d-flex my-2 projectSlide">
            <Col className="col-12 col-md-6 projectImage m-0 p-0">IMAGEN</Col>
            <Col className="col-12 col-md-6  projectDescription m-0 p-0">
              DESCRIPCION
            </Col>
          </Row>
        </Col>
        <Col className="col-12 m-0 p-0 d-flex justify-content-start align-items-center flex-column">
          <Row className="d-flex my-2 projectSlide">
            <Col className="col-12 col-md-6 projectImage m-0 p-0">IMAGEN</Col>
            <Col className="col-12 col-md-6 projectDescription m-0 p-0">
              DESCRIPCION
            </Col>
          </Row>
          <Row className="d-flex my-2 projectSlide">
            <Col className="col-12 col-md-6 projectImage m-0 p-0">IMAGEN</Col>
            <Col className="col-12 col-md-6 m-0 p-0 projectDescription">
              DESCRIPCION
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
