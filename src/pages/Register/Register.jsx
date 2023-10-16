import React from "react";
import "./Register.css";
import { RegisterForm } from "../../common/RegisterForm/RegisterForm";
import { LoginForm } from "../../common/LoginForm/LoginForm";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../../common/Button/Button";

export const Register = () => {
  return (
    <>
      <div className="registerBackgroundDesign d-flex justify-content-around align-items-start p-0 m-0 mt-md-4">
        <Container className="p-0 m-0 d-flex justify-content-center align-items-center">
          <Row className="registerClaim d-flex align-items-start justify-content-around p-2">
            <Col className="formContainer col-12 col-md-6 d-flex justify-content-center align-items-start">
              <RegisterForm />
            </Col>
            <Col className="col-12 col-md-6 mt-2 mt-md-0 pt-md-4 d-flex flex-column align-items-center">
              <div className="imgContainer"></div>
              <p className="text-center registerTextDesign py-3 px-2">
                Registrate para poder disfrutar de la experiencia completa.
              </p>
              <div className="w-100 d-flex justify-content-center">
              <Button
                name="Más información"
                path="/"
                functionButton={(e) => onClick(e)}
              />
              </div>
             
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

{
  /* <div className="formContainer d-flex justify-content-center align-items-center">
            <LoginForm />
          </div>{" "} */
}
