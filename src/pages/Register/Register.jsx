import React from "react";
import "./Register.css";
import { RegisterForm } from "../../common/RegisterForm/RegisterForm";
import { LoginForm } from "../../common/LoginForm/LoginForm";
import { Container, Row, Col } from "react-bootstrap";

export const Register = () => {
  return (
    <>
      <div className="registerBackgroundDesign d-flex justify-content-around align-items-start p-0 m-0 mt-md-4">
        <Container className="p-0 m-0 d-flex justify-content-center align-items-center">
          <Row  className="registerClaim w-100 d-flex align-items-center justify-content-center p-2">
            <Col className="formContainer col-12 col-md-6 d-flex justify-content-center align-items-center">
              <RegisterForm />
            </Col>
            <Col className="col-12 col-md-6">
              <p className="text-center text-light py-5">
                Lorem fistrum me cago en tus muelas ahorarr pecador la caidita
                quietooor ese pedazo de. De la pradera diodenoo te va a hasé
                pupitaa tiene musho peligro. Al ataquerl apetecan a wan está la
                cosa muy malar apetecan hasta luego Lucas a peich benemeritaar
                diodenoo. Tiene musho peligro la caidita va usté muy cargadoo
                caballo blanco caballo negroorl ese hombree te va a hasé pupitaa
                papaar papaar al ataquerl pecador pupita. Tiene musho peligro
                ese que llega diodeno ahorarr apetecan está la cosa muy malar
                quietooor apetecan. Caballo blanco caballo negroorl condemor no
                te digo trigo por no llamarte Rodrigor sexuarl ese hombree te va
                a hasé pupitaa. Amatomaa a peich amatomaa por la gloria de mi
                madre se calle ustée te va a hasé pupitaa a gramenawer se calle
                ustée benemeritaar tiene musho peligro. A peich apetecan te va a
                hasé pupitaa pecador pecador. Jarl ese pedazo de tiene musho
                peligro
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
