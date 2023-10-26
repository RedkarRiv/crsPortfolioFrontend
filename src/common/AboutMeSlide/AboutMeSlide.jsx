import React from "react";
import "./AboutMeSlide.css";
import { Col, Row } from "react-bootstrap";
import CV from "../../pdfs/CarlosRedondo_CV.pdf";
export const AboutMeSlide = ({ id }) => {
  return (
    <div className="aboutMeBG w-100 mt-5 p-0 d-flex justify-content-center" id={id}>
      <Row className="aboutMeSlideDesign m-0 py-5 d-flex justify-content-center">
        <Col className="col-12 fs-1 text-light fw-bold d-flex text-center justify-content-center align-items-center pt-5 m-0">
          Acerca de mí
        </Col>
        <Col className="col-12 col-md-4 d-flex justify-content-center align-items-start pt-4 m-0 p-0">
          <div className="techLabel d-flex justify-content-start align-items-center flex-column py-4 px-3">
            <div className="fw-bold text-center fs-3">FRONTEND</div>
            <div className="text-center py-4">
              Me encanta diseñar paginas y componentes intuitivos que mejoren la
              UX y faciliten la escalabilidad de los proyectos.
            </div>
            <div className="d-flex flex-column align-items-center text-center">
              <div className="fw-bold my-1">JAVASCRIPT</div>
              <div className="fw-bold my-1">REACT + REDUX</div>
              <div className="fw-bold my-1">PHP</div>
              <div className="fw-bold my-1">BOOTSTRAP</div>
              <div className="fw-bold my-1">TAILWIND</div>
              <div className="fw-bold my-1">HTML + CSS</div>
            </div>
          </div>
        </Col>
        <Col className="col-12 col-md-4 d-flex justify-content-center align-items-start pt-4 m-0 p-0">
          <div className="techLabel d-flex justify-content-start align-items-center flex-column py-4 px-3">
            <div className="fw-bold text-center fs-3">BACKEND</div>
            <div className="text-center py-4">
              Disfruto trabajando con lógica y procesamiento de datos para
              facilitar la comunicación entre APIs, así como la seguridad en
              todos sus procesos.
            </div>
            <div className="d-flex flex-column align-items-center text-center">
              <div className="fw-bold my-1">JAVASCRIPT</div>
              <div className="fw-bold my-1">NODE.JS</div>
              <div className="fw-bold my-1">EXPRESS</div>
              <div className="fw-bold my-1">SEQUELIZE</div>
              <div className="fw-bold my-1">PHP</div>
              <div className="fw-bold my-1">LARAVEL</div>
            </div>
          </div>{" "}
        </Col>{" "}
        <Col className="col-12 col-md-4 d-flex justify-content-center align-items-start pt-4 m-0 p-0">
          <div className="techLabel d-flex justify-content-start align-items-center flex-column py-4 px-3">
            <div className="fw-bold text-center fs-3">BACKGROUND</div>
            <div className="text-center py-4">
              Mi experiencia en Marketing digital y RRPP, así como gestión de
              equipos, me permite mejorar mi diligencia a la hora de programar.
            </div>
            <div className="d-flex flex-column align-items-center text-center">
              <div className="fw-bold my-1">MARKETING & COMUNICACIÓN</div>
              <div className="fw-bold my-1">RRPP</div>
              <div className="fw-bold my-1">ECOMMERCE</div>
              <div className="fw-bold my-1">COORDINACION DE EQUIPOS</div>
              <div className="fw-bold my-1">GESTION COMERCIAL</div>
            </div>
          </div>{" "}
        </Col>
        <Col className="col-12 downloadFilesContainer d-flex justify-content-center align-items-center mt-5 p-0">
          <a className="fileDownload px-3" href={CV} download>
            Descargar CV
          </a>
        </Col>
      </Row>
    </div>
  );
};
