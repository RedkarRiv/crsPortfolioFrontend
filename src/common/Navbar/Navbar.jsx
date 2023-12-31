import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import AccountAvatar from "../../img/avatarAccount.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDataCheck, userout } from "../../pages/userSlice";
import signatureCRS from "../../img/carlosRedondoSignature.png";

export const NavbarTop = ({ scrollToTop }) => {
  const navigate = useNavigate();
  //FORM SELECTION
  const handleRegisterClickRegister = () => {
    scrollToTop();

    navigate("/authform?formSelection=0");
  };

  const handleRegisterClickLogin = () => {
    scrollToTop();

    navigate("/authform?formSelection=1");
  };

  //REDUX
  const dispatch = useDispatch();

  const credentialsRdx = useSelector(userDataCheck);
  const [newToken, setNewToken] = useState("");

  useEffect(() => {
    setNewToken(credentialsRdx.credentials.token);
  }, [credentialsRdx]);

  //LOGOUT
  const logOut = () => {
    dispatch(userout());
    scrollToTop();
    navigate("/");
  };

  return (
    <div className="m-0 p-0">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbarDesign text-white navbar-dark p-2 m-0 d-flex justify-content-center"
        fixed="top"
      >
        <Container className="m-0 p-0  w-100">
          <Navbar.Brand
            onClick={() => {
              navigate("/");
              scrollToTop();
            }}
            className="logoDesign"
          >
            <img
              alt="Carlos Redondo"
              className="signatureDesign"
              src={signatureCRS}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto w-100 d-flex justify-content-center align-items-center">
              <Nav className="w-75 d-flex justify-content-around align-items-center">
                <div
                  className="navbarOptionDesign"
                  onClick={() => {
                    navigate("/");
                    scrollToTop();
                  }}
                >
                  Inicio
                </div>
                <div
                  className="navbarOptionDesign"
                  onClick={() => navigate("/shop")}
                >
                  ShopSIM
                </div>
                <div
                  className="navbarOptionDesign"
                  onClick={() => navigate("/")}
                >
                  GamesSIM
                </div>
                <div
                  className="navbarOptionDesign"
                  onClick={() => navigate("/")}
                >
                  BOTSIM
                </div>
              </Nav>
            </Nav>

            {newToken ? (
              <Nav className="profileButtons w-25 text-light d-flex justify-content-center align-items-center text-center">
                <div
                  className="p-1 me-2 accountButtons"
                  onClick={() => navigate("/profile")}
                >
                  {" "}
                  <div>
                    <img
                      src={AccountAvatar}
                      alt="Mi cuenta"
                      className="avatarAccountDesign"
                    />
                    <div className="p-1 exitButton">Perfil</div>
                  </div>
                </div>
                <div className="p-1 exitButton" onClick={() => logOut()}>
                  Logout
                </div>
              </Nav>
            ) : (
              <Nav className="text-light w-25 d-flex justify-content-center align-items-center">
                <div
                  className="p-1 me-3 loginButton"
                  onClick={handleRegisterClickLogin}
                >
                  Login
                </div>
                <div
                  className="p-1 registerButton"
                  onClick={handleRegisterClickRegister}
                >
                  Registro
                </div>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
