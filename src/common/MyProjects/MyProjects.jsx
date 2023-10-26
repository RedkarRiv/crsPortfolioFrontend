import React from "react";
import "./MyProjects.css";
import { Col, Row } from "react-bootstrap";
import { Button } from "../Button/Button";
import projectsPortfolio  from "../../data/projectsData.js"

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
            {projectsPortfolio.map((item) => {
              return (
                <Col
                  className="col-12 col-xl-6  m-0 p-2 d-flex justify-content-between align-items-center flex-column"
                  key={item.title}
                >
                  <div className="projectContainer d-flex justify-content-center align-items-center flex-column p-4">
                    <div className="projectTitle">{item.title}</div>
                    <div className="w-50 d-flex justify-content-around align-items-center my-3">
                      <div className="techElement"></div>
                      <div className="techElement"></div>
                      <div className="techElement"></div>
                      <div className="techElement"></div>
                    </div>
                    <div className="projectImgContainer">
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
    </>
  );
};
