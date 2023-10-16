import React, { useState, useEffect } from "react";
import "./Register.css";
import { RegisterForm } from "../../common/RegisterForm/RegisterForm";
import { LoginForm } from "../../common/LoginForm/LoginForm";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../../common/Button/Button";

export const Register = () => {
  const formSelection = "1"
  const [registerForm, setRegisterForm] = useState(formSelection);
console.log("Esto es el register")
console.log(registerForm)
  return (
    <>
      <div className="authBackgroundDesign d-flex justify-content-around align-items-start p-0 m-0 mt-md-4">
        <Container className="p-0 m-0 d-flex justify-content-center align-items-center">
          {registerForm === "0" ? (
            <Row className="registerClaim d-flex align-items-start justify-content-around p-2 mt-3 mt-md-0">
              <Col className="formContainer col-12 col-md-6 d-flex justify-content-center align-items-start">
                <RegisterForm />
              </Col>
              <Col className="col-12 col-md-6 mt-2 mt-md-0 pt-md-4 d-flex flex-column align-items-center">
                <div className="imgContainer"></div>
                <p className="text-center registerTextDesign py-3 px-2 m-0">
                  Registrate para poder disfrutar de la experiencia completa.
                </p>
                <div className="w-100 d-flex justify-content-center p-3">
                  <Button
                    name="Más información"
                    path="/"
                    functionButton={(e) => onClick(e)}
                  />
                </div>
              </Col>
            </Row>
          ) : (
            <Row className="loginClaim d-flex align-items-start justify-content-center p-2">
              <Col className="col-12 w-75 d-flex justify-content-center align-items-center">
                <LoginForm />
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </>
  );
};
