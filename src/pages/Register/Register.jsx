import React from "react";
import "./Register.css";
import { RegisterForm } from "../../common/RegisterForm/RegisterForm";
import { LoginForm } from "../../common/LoginForm/LoginForm";
import { Container, Row, Col } from "react-bootstrap";
import bgRegisterSlide from "../../img/bgRegisterSlide.jpg"
export const Register = () => {
  return (
    <>
      <div className="registerBackgroundDesign d-flex justify-content-around align-items-start p-0 m-0 mt-md-4">
        <Container className="p-0 m-0 d-flex justify-content-center align-items-center">
          <Row  className="registerClaim w-100 d-flex align-items-center justify-content-around p-2">
            <Col className="formContainer col-12 col-md-4 d-flex justify-content-center align-items-start">
              <RegisterForm />
            </Col>
            <Col className="col-12 col-md-6 mt-2 mt-md-0 pt-md-4">
              <div className="imgContainer m-0">

              </div>
              
              <p className="text-center registerTextDesign py-5">
                Lorem fistrum me cago en tus muelas ahorarr pecador la caidita
                quietooor ese pedazo de. 
              </p>
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
