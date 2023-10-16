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
            <Col className="formContainer col-12 col-md-4 d-flex justify-content-center align-items-center">
              <RegisterForm />
            </Col>
            <Col className="col-12 col-md-6">
              <div className="imgContainer">

              </div>
              
              <p className="text-center text-light py-5">
                Lorem fistrum me cago en tus muelas ahorarr pecador la caidita
                quietooor ese pedazo de. De la pradera diodenoo te va a hasé
                pupitaa tiene musho peligro. Al ataquerl apetecan a wan está la
                cosa muy malar apetecan hasta luego Lucas a peich benemeritaar
                diodenoo. Tiene musho peligro la caidita va usté muy cargadoo
                caballo blanco caballo negroorl ese hombree te va a hasé pupitaa
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
