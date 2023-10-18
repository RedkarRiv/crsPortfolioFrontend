import React from "react";
import "./Home.css";
import { Col, Row } from "react-bootstrap";
import { Button } from "../../common/Button/Button";
import logoCRS from "../../img/LogoCRS.png";
export const Home = () => {
  return (
    <>
      <div className="containerhome d-flex justify-content-start flex-column align-items-start">
        {/* <Container className="m-0 d-flex justify-content-center flex-column"> */}
        <Row className="w-100 m-0 p-0">
          <Col className="slidePhoto col-6"></Col>
          <Col className="slideDescription col-6 d-flex align-items-center justify-content-center flex-column">
            <div className="d-flex align-items-center flex-column h-50">
              <div className="homeTitleDesign"> Carlos Redondo </div>
              <div className="homeSubtitleDesign">Junior Developer </div>
            </div>
          </Col>
        </Row>
        <Row className="w-100 d-flex justify-content-center m-0 mb-5 p-0">
          <img src={logoCRS} alt="Logo Crs" className="logoHomeDesign" />
        </Row>

        <Row className="d-flex justify-content-around align-items-center h-100 w-100 m-0 p-0">
          <Col className="col-7 h-25 col-md-2 mb-3">
            <Button
              className="buttonHomeColor"
              path=""
              name="Proyectos"
              functionButton={(e) => logMe(e)}
            />
          </Col>
          <Col className="col-7 h-25 col-md-2 mb-3">
            <Button
              className="buttonHomeColor"
              name="Acerca de mí"
              path=""
              functionButton={(e) => logMe(e)}
            />
          </Col>
          <Col className="col-7 h-25 col-md-2 mb-3">
            <Button
              className="buttonHomeColor"
              name="Contacto"
              path=""
              functionButton={(e) => logMe(e)}
            />
          </Col>
        </Row>
        {/* </Container> */}
      </div>
    </>
  );
};
