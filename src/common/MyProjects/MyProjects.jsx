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

export const MyProjects = ({ id }) => {
  return (
    <>
      <Row
        id={id}
        className="myProjectsBG d-flex m-0 px-3 py-5 justify-content-center"
      >
        <Col className="col-12 techTitle d-flex text-center justify-content-center align-items-center p-0 m-0">
          Mis proyectos{" "}
        </Col>
        <Col className="col-12 m-0 p-0 d-flex justify-content-start align-items-center flex-column">
          <Row className="d-flex my-2 w-75 justify-content-around">
            <Col className="col-12 col-xl-6  m-0 p-2 d-flex justify-content-between align-items-center flex-column">
              <div className="projectContainer d-flex justify-content-center align-items-center flex-column p-4">
                <div className="projectTitle">TITULO</div>
                <div className="w-50 d-flex justify-content-around align-items-center my-3">
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                </div>
                <div className="projectImgContainer">
                  <div className="pcSIM d-flex justify-content-end align-items-end p-0 m-0">
                    <div className="mobileSIM"></div>
                  </div>
                </div>
              </div>
              <Button
                className="buttonProject my-3"
                name="Ver repositorio"
                path="DentalClinic Backend"
                functionButton={() =>
                  window.open(
                    "https://github.com/RedkarRiv/ClinicaDental_BackEnd_CRS"
                  )
                }
              />{" "}
            </Col>
            <Col className="col-12 col-xl-6  m-0 p-2 d-flex justify-content-between align-items-center flex-column">
              <div className="projectContainer d-flex justify-content-center align-items-center flex-column p-4">
                <div className="projectTitle">TITULO</div>
                <div className="w-50 d-flex justify-content-around align-items-center my-3">
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                </div>
                <div className="projectImgContainer">
                  <div className="pcSIM d-flex justify-content-end align-items-end p-0 m-0">
                    <div className="mobileSIM"></div>
                  </div>
                </div>
              </div>
              <Button
                className="buttonProject my-3"
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
          <Row className="d-flex my-2 w-75 justify-content-around">
            <Col className="col-12 col-xl-6  m-0 p-2 d-flex justify-content-between align-items-center flex-column">
              <div className="projectContainer d-flex justify-content-center align-items-center flex-column p-4">
                <div className="projectTitle">TITULO</div>
                <div className="w-50 d-flex justify-content-around align-items-center my-3">
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                </div>
                <div className="projectImgContainer">
                  <div className="pcSIM d-flex justify-content-end align-items-end p-0 m-0">
                    <div className="mobileSIM"></div>
                  </div>
                </div>
              </div>
              <Button
                className="buttonProject my-3"
                name="Ver repositorio"
                path="DentalClinic Backend"
                functionButton={() =>
                  window.open(
                    "https://github.com/RedkarRiv/ClinicaDental_BackEnd_CRS"
                  )
                }
              />{" "}
            </Col>
            <Col className="col-12 col-xl-6  m-0 p-2 d-flex justify-content-between align-items-center flex-column">
              <div className="projectContainer d-flex justify-content-center align-items-center flex-column p-4">
                <div className="projectTitle">TITULO</div>
                <div className="w-50 d-flex justify-content-around align-items-center my-3">
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                </div>
                <div className="projectImgContainer">
                  <div className="pcSIM d-flex justify-content-end align-items-end p-0 m-0">
                    <div className="mobileSIM"></div>
                  </div>
                </div>
              </div>
              <Button
                className="buttonProject my-3"
                name="Ver repositorio"
                path="DentalClinic Backend"
                functionButton={() =>
                  window.open(
                    "https://github.com/RedkarRiv/ClinicaDental_BackEnd_CRS"
                  )
                }
              />{" "}
            </Col>
          </Row> <Row className="d-flex my-2 w-75 justify-content-around">
            <Col className="col-12 col-xl-6  m-0 p-2 d-flex justify-content-between align-items-center flex-column">
              <div className="projectContainer d-flex justify-content-center align-items-center flex-column p-4">
                <div className="projectTitle">TITULO</div>
                <div className="w-50 d-flex justify-content-around align-items-center my-3">
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                </div>
                <div className="projectImgContainer">
                  <div className="pcSIM d-flex justify-content-end align-items-end p-0 m-0">
                    <div className="mobileSIM"></div>
                  </div>
                </div>
              </div>
              <Button
                className="buttonProject my-3"
                name="Ver repositorio"
                path="DentalClinic Backend"
                functionButton={() =>
                  window.open(
                    "https://github.com/RedkarRiv/ClinicaDental_BackEnd_CRS"
                  )
                }
              />{" "}
            </Col>
            <Col className="col-12 col-xl-6  m-0 p-2 d-flex justify-content-between align-items-center flex-column">
              <div className="projectContainer d-flex justify-content-center align-items-center flex-column p-4">
                <div className="projectTitle">TITULO</div>
                <div className="w-50 d-flex justify-content-around align-items-center my-3">
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                  <div className="techElement"></div>
                </div>
                <div className="projectImgContainer">
                  <div className="pcSIM d-flex justify-content-end align-items-end p-0 m-0">
                    <div className="mobileSIM"></div>
                  </div>
                </div>
              </div>
              <Button
                className="buttonProject my-3"
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
      </Row>
    </>
  );
};
