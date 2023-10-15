import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import AccountAvatar from "../../img/avatarAccount.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDataCheck, userout } from "../../pages/userSlice";

export const NavbarTop = () => {

  //REDUX
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const credentialsRdx = useSelector(userDataCheck);
  const [newToken, setNewToken] = useState("");

  useEffect(() => {
    setNewToken(credentialsRdx.credentials.token);
  }, [credentialsRdx]);

//LOGOUT
  const logOut = () => {
    dispatch(userout());
    navigate("/");
  };
  

  return (
    <div className="m-0 p-0">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbarDesign text-white navbar-dark p-3 m-0
        "
      >
        <Container className="m-0 p-0">
          <Navbar.Brand
            onClick={() => navigate("/")}
            className="ps-md-5 logoDesign"
          >
           ❉ Carlos Redondo ❉
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto w-100 d-flex justify-content-center align-items-center">
              <Nav className="w-75 d-flex justify-content-around align-items-center">
                <div
                  className="navbarOptionDesign"
                  onClick={() => navigate("/")}
                >
                  Home
                </div>
                <div
                  className="navbarOptionDesign"
                  onClick={() => navigate("/")}
                >
                  BlogSIM
                </div>
                <div
                  className="navbarOptionDesign"
                  onClick={() => navigate("/")}
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
              <Nav className="profileButtons w-auto text-light d-flex justify-content-center align-items-center text-center">
                <div className="p-1" onClick={() => navigate("/profile")}>
                  {" "}
                  <img
                    src={AccountAvatar}
                    alt="Mi cuenta"
                    className="avatarAccountDesign"
                  />
                </div>
                <div className="p-1 exitButton" onClick={() => logOut()}>
                  Logout
                </div>
              </Nav>
            ) : (
              <Nav className="text-light card-subtitle">
                <div className="p-1 me-3 loginButton">Login</div>
                <div
                  className="p-1 registerButton"
                  onClick={() => navigate("/register")}
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
