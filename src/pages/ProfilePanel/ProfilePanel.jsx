import React, { useEffect, useState } from "react";
import "./ProfilePanel.css";
import { Col, Container, Row } from "react-bootstrap";
import { InputLabel } from "../../common/InputLabel/InputLabel";
import { getProfile } from "../../services/apiCall";
import { useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";
import { Button } from "../../common/Button/Button";
import moment from "moment";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

export const ProfilePanel = () => {
  const navigate = useNavigate();
  const credentialsRdx = useSelector(userDataCheck);
  const credentialCheck = credentialsRdx?.credentials?.token;
  //NEW PASSWORD DISPLAY
  const [changePasswordClicked, setChangePasswordClicked] = useState(false);

  const handlePasswordChangeClick = () => {
    setChangePasswordClicked(!changePasswordClicked); 
  };
  
  //PROFILE NAVBAR SELECTION
  const [selectedNavItem, setSelectedNavItem] = useState("Mi perfil");

  const handleNavItemClick = (itemName) => {
    setSelectedNavItem(itemName);
  };
  //NO CREDENTIALS BLOCK
  const credentialsActive = () => {
    if (!credentialsRdx) {
      navigate("/");
    }
  };

  useEffect(() => {
    credentialsActive();
  }, []);

  //GET PROFILE
  const [userData, setUserData] = useState({});

  const getMyProfile = () => {
    getProfile(credentialCheck)
      .then((resultado) => {
        if (resultado.data.message == "Token invalido") {
          navigate("/");
          return;
        } else {
          setUserData(resultado.data.data);
          console.log(userData);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMyProfile();
  }, [credentialsRdx]);

  //DATE FORMAT
  const formatedDated = moment(userData.createdAt).format("DD/MM/YYYY HH:mm");

  return (
    <>
      <Container
        fluid
        className="profilePanelBG m-0 d-flex justify-content-start align-items-center flex-column"
      >
        <Row className="d-flex w-100 p-0 m-0 text-center">
          <Col className="profilePanelTitle col-12 p-5">
            Bienvenido a tu perfil
          </Col>
        </Row>
        <Row className="w-100 h-auto d-flex px-3 m-0 justify-content-center">
          <Col className="slideProfile p-3 col-8">
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <div
                  className={`navLabel p-2 mx-2 ${
                    selectedNavItem === "Mi perfil" ? "navItemActive" : ""
                  }`}
                  onClick={() => handleNavItemClick("Mi perfil")}
                >
                  Mi perfil
                </div>{" "}
              </Nav.Item>
              <Nav.Item>
                <div
                  className={`navLabel p-2 mx-2 ${
                    selectedNavItem === "Mis pedidos" ? "navItemActive" : ""
                  }`}
                  onClick={() => handleNavItemClick("Mis pedidos")}
                >
                  Mis pedidos
                </div>{" "}
              </Nav.Item>
            </Nav>
            <Row className="myProfileBG w-100 d-flex justify-content-center align-items-start p-1 m-0">
              <Col className="d-flex col-8 h-100 justify-content-center m-0 p-0 flex-column">
                <div className="text-light w-100 d-flex justify-content-center my-2">
                  Cuenta: {userData.email}
                </div>
                <div className="inputBox d-flex my-2 w-100 justify-content-center align-items-center">
                  <div className="updateIcon px-2">✎</div>
                  <InputLabel
                    type="text"
                    classDesign="me-3"
                    name="firstName"
                    functionHandler={(e) => InputHandlerRegister(e)}
                    placeholder={"Nombre: " + userData.firstName}
                    onBlurFunction={(e) => InputRegisterCheck(e)}
                  />
                </div>
                <div className="inputBox d-flex my-2 w-100 justify-content-center align-items-center">
                  <div className="updateIcon px-2">✎</div>
                  <InputLabel
                    type="text"
                    classDesign="me-3"
                    name="lastName"
                    functionHandler={(e) => InputHandlerRegister(e)}
                    placeholder={"Apellido: " + userData.lastName}
                    onBlurFunction={(e) => InputRegisterCheck(e)}
                  />
                </div>
                {changePasswordClicked && (
                  <>
                    <div className="inputBox d-flex my-2 w-100 justify-content-center align-items-center">
                      <div className="updateIcon px-2">✎</div>
                      <InputLabel
                        type="password"
                        classDesign="me-3"
                        name="password"
                        functionHandler={(e) => InputHandlerRegister(e)}
                        placeholder="Nueva contraseña"
                        onBlurFunction={(e) => InputRegisterCheck(e)}
                      />
                    </div>
                    <div className="inputBox d-flex my-2 w-100 justify-content-center align-items-center">
                      <div className="updateIcon px-2">✎</div>
                      <InputLabel
                        type="password"
                        classDesign="me-3"
                        name="password1"
                        functionHandler={(e) => InputHandlerRegister(e)}
                        placeholder="Confirmar nueva contraseña"
                        onBlurFunction={(e) => InputRegisterCheck(e)}
                      />
                    </div>
                  </>
                )}
                <div className="buttonsContainer w-100 my-2 d-flex justify-content-around align-items-center flex-column">
                  <Button
                    className="buttonAuthColor"
                    name="Cambiar contraseña"
                    path=""
                    functionButton={handlePasswordChangeClick}
                  />
                  <Button
                    className="buttonAuthColor"
                    name="Guardar cambios"
                    path=""
                    functionButton={(e) => registerMeHandler(e)}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
