import React from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../../common/Button/Button";
import logoCRS from "../../img/LogoCRS.png";
import { AboutMeSlide } from "../../common/AboutMeSlide/AboutMeSlide";
import { MyProjects } from "../../common/MyProjects/MyProjects";
import { ContactForm } from "../../common/ContactForm/ContactForm";

export const Home = () => {
  const scrollToSection = (targetId) => {

    const element = document.getElementById(targetId);
    if (targetId!="CRSProjects") {
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      element.scrollIntoView({ behavior: "smooth", block: "start" });

    }
  };
  return (
    <>
      <Container
        fluid
        className="m-0 w-100 d-flex containerHome justify-content-center flex-column"
      >
        <Row className="w-100 m-0 p-0">
          <Col className="slidePhoto col-6 p-0"></Col>
          <Col className="slideDescription col-6 d-flex align-items-center justify-content-center flex-column p-0">
            <div className="d-flex align-items-center flex-column h-50">
              <div className="homeTitleDesign"> Carlos Redondo </div>
              <div className="homeSubtitleDesign">Junior Developer </div>
            </div>
          </Col>
        </Row>
        <Row className="w-100 d-flex justify-content-center m-0 p-0">
          <img src={logoCRS} alt="Logo Crs" className="logoHomeDesign" />
        </Row>

        <Row className="buttonHomeContainer d-flex justify-content-center align-items-center w-100 p-0 m-0 mb-5">
          <Col className="col-7 h-25 col-md-2 mb-0 mb-xs-3">
            <Button
              className="buttonHomeColor"
              path=""
              name="Acerca de mí"
              functionButton={(e) => scrollToSection("aboutMe")}
            />
          </Col>
          <Col className="col-7 h-25 col-md-2 mb-0 mb-xs-3">
            <Button
              className="buttonHomeColor"
              name="Proyectos"
              path=""
              functionButton={(e) => scrollToSection("CRSProjects")}
            />
          </Col>
          <Col className="col-7 h-25 col-md-2 mb-0 mb-xs-3">
            <Button
              className="buttonHomeColor"
              name="Contacto"
              path=""
              functionButton={(e) => scrollToSection("contactMe")}
            />
          </Col>
        </Row>
        <AboutMeSlide id="aboutMe" />
        <div id="CRSProjects"  className="my-5"></div>
        <MyProjects />
        <ContactForm id="contactMe" />
      </Container>
    </>
  );
};
