import React from "react";
import "./AboutMeSlide.css";
import { Col, Row } from "react-bootstrap";
import CV from "../../pdfs/CarlosRedondo_CV.pdf";
export const AboutMeSlide = ({ id }) => {
  return (
    <>
      <Row id={id} className="aboutMeBG m-0 py-5 d-flex justify-content-center">
        <Col className="col-12 techTitle d-flex text-center justify-content-center align-items-center py-3 px-0 m-0">
          Acerca de mí
        </Col>
        <Col className="col-12 col-md-4 d-flex justify-content-center align-items-start pt-4 m-0 p-0">
          <div className="techLabel d-flex justify-content-start align-items-center flex-column py-4 px-3">
            <div className="techContentTitle">FRONTEND</div>
            <div className="techContentDescription py-4">
              Me encanta diseñar paginas y componentes intuitivos que mejoren la
              UX y faciliten la escalabilidad de los proyectos.
            </div>
            <div className="technologyItems d-flex flex-column align-items-center">
              <div className="techItem my-1">JAVASCRIPT</div>
              <div className="techItem my-1">REACT + REDUX</div>
              <div className="techItem my-1">PHP</div>
              <div className="techItem my-1">BOOTSTRAP</div>
              <div className="techItem my-1">TAILWIND</div>
              <div className="techItem my-1">HTML + CSS</div>
            </div>
          </div>
        </Col>
        <Col className="col-12 col-md-4 d-flex justify-content-center align-items-start pt-4 m-0 p-0">
          <div className="techLabel d-flex justify-content-start align-items-center flex-column py-4 px-3">
            <div className="techContentTitle">BACKEND</div>
            <div className="techContentDescription py-4">
              Disfruto trabajando con lógica y procesamiento de datos para
              facilitar la comunicación entre APIs, así como la seguridad en
              todos sus procesos.
            </div>
            <div className="technologyItems d-flex flex-column align-items-center">
              <div className="techItem my-1">JAVASCRIPT</div>
              <div className="techItem my-1">NODE.JS</div>
              <div className="techItem my-1">EXPRESS</div>
              <div className="techItem my-1">SEQUELIZE</div>
              <div className="techItem my-1">PHP</div>
              <div className="techItem my-1">LARAVEL</div>
            </div>
          </div>{" "}
        </Col>{" "}
        <Col className="col-12 col-md-4 d-flex justify-content-center align-items-start pt-4 m-0 p-0">
          <div className="techLabel d-flex justify-content-start align-items-center flex-column py-4 px-3">
            <div className="techContentTitle">BACKGROUND</div>
            <div className="techContentDescription py-4">
              Mi experiencia en Marketing y RRPP me permite complementar mi enfoque a la hora de programar priorizando el usuario y el producto en todo momento. 
            </div>
            <div className="technologyItems d-flex flex-column align-items-center">
              <div className="techItem my-1">MARKETING & COMUNICACIÓN</div>
              <div className="techItem my-1">RRPP</div>
              <div className="techItem my-1">ECOMMERCE</div>
              <div className="techItem my-1">COORDINACION DE EQUIPOS</div>
              <div className="techItem my-1">GESTION COMERCIAL</div>
            </div>
          </div>{" "}
        </Col>
        <Col className="col-12 downloadFilesContainer d-flex justify-content-center align-items-center mt-5 p-0">
          <a className="fileDownload px-3" href={CV} download>
            Descargar CV
          </a>
        </Col>
      </Row>
    </>
  );
};
