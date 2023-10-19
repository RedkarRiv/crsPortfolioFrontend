import React from "react";
import "./MyProjects.css";
import { Col, Row } from "react-bootstrap";
import dentalClinicFront from "../../img/dentalClinicFront_img.png";
import dentalClinicBack from "../../img/dentalClinicBack_img.png";
import MasterMind from "../../img/MasterMind_img.png";
import Devstaurante from "../../img/Devstaurante_img.png";
import GBColor from "../../img/GBC_img.png";
import { Button } from "../Button/Button";
import WWSimg from "../../img/WWS_img.png";

export const MyProjects = ({id}) => {
  return (
    <>
      <Row id={id}className="myProjectsBG d-flex m-0 px-3 py-5 justify-content-center">
        <Col className="col-12 techTitle d-flex text-center justify-content-center align-items-center p-0 m-0">
          Mis proyectos{" "}
        </Col>
        <Col className="col-12 m-0 p-0 d-flex justify-content-start align-items-center flex-column">
          <Row className="d-flex my-2 projectSlide">
            <Col className="col-12 col-md-6 projectImage m-0 p-0 d-flex justify-content-center align-items-center">
              <img
                src={WWSimg}
                alt="WWS helpdesk"
                className="imgProject h-100"
              />
            </Col>
            <Col className="col-12 col-md-6 projectDescription m-0 py-3 d-flex justify-content-between align-items-center flex-column">
              <div className="projectTitle">WWS TICKET REQUEST</div>
              <div className="my-2">
                {" "}
                Tiene musho peligro diodenoo. Pecador ahorarr a wan mamaar
                llevame al sircoo. Tiene musho peligro diodenoo. Pecador ahorarr
                a wan mamaar llevame al sircoo. Tiene musho peligro diodenoo.
                Pecador ahorarr a wan mamaar llevame al sircoo
              </div>
              <Button
                className="buttonProject"
                name="Ver repositorio"
                path="WWS"
                functionButton={() =>
                  window.open(
                    "https://github.com/RedkarRiv/WeWillSee_TicketRequest_FullStack"
                  )
                }
              />
            </Col>
          </Row>
          <Row className="d-flex my-2 projectSlide">
            <Col className="col-12 col-md-6 projectImage m-0 p-1 d-flex justify-content-center align-items-center">
              <img
                src={dentalClinicFront}
                alt="Dental Clinic Frontend"
                className="imgProject p-1"
              />
            </Col>
            <Col className="col-12 col-md-6 projectDescription m-0 py-3 d-flex justify-content-between align-items-center flex-column">
              <div className="projectTitle">DENTAL CLINIC FRONTEND</div>
              <div className="my-2">
                {" "}
                Tiene musho peligro diodenoo. Pecador ahorarr a wan mamaar
                llevame al sircoo. Tiene musho peligro diodenoo. Pecador ahorarr
                a wan mamaar llevame al sircoo. Tiene musho peligro diodenoo.
                Pecador ahorarr a wan mamaar llevame al sircoo
              </div>
              <Button
                className="buttonProject"
                name="Ver repositorio"
                path="DentalClinic"
                functionButton={() =>
                  window.open("https://github.com/RedkarRiv/REACT_DentalClinic")
                }
              />
            </Col>
          </Row>
          <Row className="d-flex my-2 projectSlide">
            <Col className="col-12 col-md-6 projectImage m-0 p-1 d-flex justify-content-center align-items-center">
              {" "}
              <img
                src={dentalClinicBack}
                alt="Dental Clinic Frontend"
                className="imgProject imgBackFix"
              />
            </Col>
            <Col className="col-12 col-md-6 projectDescription m-0 py-3 d-flex justify-content-between align-items-center flex-column">
              <div className="projectTitle">DENTAL CLINIC BACKEND</div>
              <div className="my-2">
                {" "}
                Tiene musho peligro diodenoo. Pecador ahorarr a wan mamaar
                llevame al sircoo. Tiene musho peligro diodenoo. Pecador ahorarr
                a wan mamaar llevame al sircoo. Tiene musho peligro diodenoo.
                Pecador ahorarr a wan mamaar llevame al sircoo
              </div>
              <Button
                className="buttonProject"
                name="Ver repositorio"
                path="DentalClinic Backend"
                functionButton={() =>
                  window.open(
                    "https://github.com/RedkarRiv/ClinicaDental_BackEnd_CRS"
                  )
                }
              />{" "}
            </Col>
          </Row>
        </Col>
        <Col className="col-12 m-0 p-0 d-flex justify-content-start align-items-center flex-column">
          <Row className="d-flex my-2 projectSlide">
            <Col className="col-12 col-md-6 projectImage m-0 p-1 d-flex justify-content-center align-items-center">
              {" "}
              <img
                src={MasterMind}
                alt="Dental Clinic Frontend"
                className="imgProject p-1"
              />
            </Col>
            <Col className="col-12 col-md-6 projectDescription m-0 py-3 d-flex justify-content-between align-items-center flex-column">
              <div className="projectTitle">MASTERMIND</div>
              <div className="my-2">
                {" "}
                Tiene musho peligro diodenoo. Pecador ahorarr a wan mamaar
                llevame al sircoo. Tiene musho peligro diodenoo. Pecador ahorarr
                a wan mamaar llevame al sircoo. Tiene musho peligro diodenoo.
                Pecador ahorarr a wan mamaar llevame al sircoo
              </div>
              <Button
                className="buttonProject"
                name="Ver repositorio"
                path="MasterMind"
                functionButton={() =>
                  window.open("https://github.com/RedkarRiv/MasterMind")
                }
              />{" "}
            </Col>
          </Row>
          <Row className="d-flex my-2 projectSlide">
            <Col className="col-12 col-md-6 projectImage m-0 p-1 d-flex justify-content-center align-items-center">
              {" "}
              <img
                src={Devstaurante}
                alt="Dental Clinic Frontend"
                className="imgProject h-100"
              />
            </Col>
            <Col className="col-12 col-md-6 projectDescription m-0 py-3 d-flex justify-content-between align-items-center flex-column">
              <div className="projectTitle">DEVSTAURANTE</div>
              <div className="my-2">
                {" "}
                Tiene musho peligro diodenoo. Pecador ahorarr a wan mamaar
                llevame al sircoo. Tiene musho peligro diodenoo. Pecador ahorarr
                a wan mamaar llevame al sircoo. Tiene musho peligro diodenoo.
                Pecador ahorarr a wan mamaar llevame al sircoo
              </div>
              <Button
                className="buttonProject"
                name="Ver repositorio"
                path="Devstaurante"
                functionButton={() =>
                  window.open("https://github.com/RedkarRiv/Rest_Project")
                }
              />{" "}
            </Col>
          </Row>
        </Col>
        <Col className="col-12 m-0 p-0 d-flex justify-content-start align-items-center flex-column">
          <Row className="d-flex my-2 projectSlide">
            <Col className="col-12 col-md-6 projectImage m-0 p-1 d-flex justify-content-center align-items-center">
              {" "}
              <img
                src={GBColor}
                alt="Dental Clinic Frontend"
                className="imgProject p-1"
              />
            </Col>
            <Col className="col-12 col-md-6 projectDescription m-0 py-3 d-flex justify-content-between align-items-center flex-column">
              <div className="projectTitle">GAME BOY COLOR</div>
              <div className="my-2">
                {" "}
                Tiene musho peligro diodenoo. Pecador ahorarr a wan mamaar
                llevame al sircoo. Tiene musho diodenoo. Pecador ahorarr a wan
                mamaar llevame al sircoo. Tiene musho peligro diodenoo. Pecador
                ahorarr a wan mamaar llevame al sircoo
              </div>
              <Button
                className="buttonProject"
                name="Ver repositorio"
                path="GBC Pokemon"
                functionButton={() =>
                  window.open("https://github.com/RedkarRiv/GH_FSD_GBC")
                }
              />{" "}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
