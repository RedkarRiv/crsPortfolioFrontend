import React from "react";
import "./MyProjects.css";
import { Col, Row } from "react-bootstrap";
import { Button } from "../Button/Button";
import projectsPortfolio from "../../data/projectsData.js";

export const MyProjects = ({ id }) => {
  return (
    <div
      id={id}
      className="myProjectsBG d-flex justify-content-center p-0 m-0"
    >
      <Row className="myProjectsSlideDesign d-flex justify-content-center py-5">
        <Col className="col-12 fs-1 fw-bold d-flex text-center text-light justify-content-center align-items-center py-3 px-0 mt-3">
          Mis proyectos{" "}
        </Col>
        <Col className="col-12 m-0 p-0 d-flex justify-content-start align-items-center flex-column">
          <Row className="d-flex my-2 justify-content-around px-1 w-75">
            {projectsPortfolio.map((item) => {
              return (
                <Col
                  className="col-12 col-xl-5 mt-3 p-2 d-flex justify-content-between align-items-center flex-column"
                  key={item.title}
                >
                  <div className="projectContainer rounded d-flex justify-content-center align-items-center flex-column p-4">
                    <div className="fs-4 p-1 fw-bold  text-dark ">{item.title}</div>
                    <div className="w-50 d-flex justify-content-around align-items-center my-3">
                      <div className="techElement"></div>
                      <div className="techElement"></div>
                      <div className="techElement"></div>
                      <div className="techElement"></div>
                    </div>
                    <div className="pcSIM d-flex justify-content-end align-items-end p-0 m-0">
                      <img
                        src={item.imgPC}
                        alt={item.title}
                        className="backgroundImage"
                      />
                      {item.imgMobile ? (
                        <div className="mobileSIM">
                          <img
                            src={item.imgMobile}
                            alt={item.title}
                            className="backgroundImageMobile"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <Button
                    className="buttonProject my-3"
                    name="Ver repositorio"
                    path={item.title}
                    functionButton={() => window.open(item.repo)}
                  />{" "}
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};
