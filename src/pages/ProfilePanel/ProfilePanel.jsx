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
  const roleCheck = credentialsRdx?.credentials?.user?.roleId;

  //EDIT PROFILE DATA
  //FIRSTNAME
  const [enableEditingDataFirstname, setEnableEditingDataFirstname] =
    useState(false);
  const handleEnableEditingDataName = () => {
    setEnableEditingDataFirstname(!enableEditingDataFirstname);
  };
  //LASTNAME

  const [enableEditingDataLastname, setEnableEditingDataLastname] =
    useState(false);

  const handleEnableEditingDataLastname = () => {
    setEnableEditingDataLastname(!enableEditingDataLastname);
  };

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
  const formatedDated = moment(userData.createdAt).format("DD/MM/YYYY");

  return (
    <>
      <Container
        fluid
        className="profilePanelBG m-0 pb-4 d-flex justify-content-start align-items-center flex-column"
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
                  Perfil
                </div>{" "}
              </Nav.Item>
              <Nav.Item>
                <div
                  className={`navLabel p-2 mx-2 ${
                    selectedNavItem === "Mis pedidos" ? "navItemActive" : ""
                  }`}
                  onClick={() => handleNavItemClick("Mis pedidos")}
                >
                  Pedidos
                </div>{" "}
              </Nav.Item>
              {roleCheck == 2 ? (
                <Nav.Item>
                  <div
                    className={`navLabel p-2 mx-2 ${
                      selectedNavItem === "Panel Admin" ? "navItemActive" : ""
                    }`}
                    onClick={() => handleNavItemClick("Panel Admin")}
                  >
                    Admin
                  </div>{" "}
                </Nav.Item>
              ) : null}
            </Nav>
            <Row className="myProfileBG w-100 d-flex justify-content-center align-items-center p-1 m-0">
              {selectedNavItem === "Mi perfil" ? (
                <Col className="d-flex col-11 col-md-8 h-100 justify-content-center m-0 p-0 flex-column">
                  <div className="inputBox d-flex mt-4 pe-2 w-100 justify-content-center align-items-center">
                    {!enableEditingDataFirstname ? (
                      <>
                        <div
                          className="updateIcon"
                          onClick={() => handleEnableEditingDataName()}
                        >
                          ✎
                        </div>
                        <div className="profileDataDesign w-75 d-flex justify-content-center text-light pe-4">
                          <div className="profileDataTitle me-2">Nombre:</div>{" "}
                          {userData.firstName}
                        </div>
                      </>
                    ) : (
                      <div className="inputBox d-flex my-2 w-75 justify-content-center align-items-center">
                        <div
                          className="updateIcon me-2"
                          onClick={() => handleEnableEditingDataName()}
                        >
                          ✎
                        </div>
                        <InputLabel
                          type="text"
                          classDesign=""
                          name="firstName"
                          functionHandler={(e) => InputHandlerRegister(e)}
                          placeholder="Nuevo nombre"
                          onBlurFunction={(e) => InputRegisterCheck(e)}
                        />
                      </div>
                    )}
                  </div>

                  <div className="inputBox d-flex mt-4 pe-2 w-100 justify-content-center align-items-center">
                    {!enableEditingDataLastname ? (
                      <>
                        <div
                          className="updateIcon"
                          onClick={() => handleEnableEditingDataLastname()}
                        >
                          ✎
                        </div>
                        <div className="profileDataDesign w-75 d-flex justify-content-center text-light pe-4">
                          <div className="profileDataTitle me-2">Apellido:</div>{" "}
                          {userData.lastName}
                        </div>
                      </>
                    ) : (
                      <div className="inputBox d-flex my-2 w-75 justify-content-center align-items-center">
                        <div
                          className="updateIcon me-2"
                          onClick={() => handleEnableEditingDataLastname()}
                        >
                          ✎
                        </div>
                        <InputLabel
                          type="text"
                          classDesign=""
                          name="lastName"
                          functionHandler={(e) => InputHandlerRegister(e)}
                          placeholder="Nuevo apellido"
                          onBlurFunction={(e) => InputRegisterCheck(e)}
                        />
                      </div>
                    )}
                  </div>
                  <div className="inputBox d-flex mt-4 w-100 justify-content-center align-items-center">
                    <div className="updateIcon"></div>
                    <div className="profileDataDesign  w-75 d-flex justify-content-center text-light pe-4">
                      <div className="profileDataTitle me-2">Email:</div>{" "}
                      {userData.email}
                    </div>
                  </div>
                  <div className="inputBox d-flex mt-4 w-100 justify-content-center align-items-center">
                    <div className="updateIcon"></div>
                    <div className="profileDataDesign  w-75 d-flex justify-content-center text-light pe-4">
                      <div className="profileDataTitle me-2">Estado:</div>{" "}
                      {userData.userStatus ? "Activa" : "Inactiva"}
                    </div>
                  </div>
                  <div className="inputBox d-flex mt-4 w-100 justify-content-center align-items-center">
                    <div className="updateIcon"></div>
                    <div className="profileDataDesign  w-75 d-flex justify-content-center text-light pe-4">
                      <div className="profileDataTitle me-2">Creación:</div>{" "}
                      {formatedDated}
                    </div>
                  </div>
                  {changePasswordClicked && (
                    <>
                      <div className="w-100 d-flex justify-content-center my-2 align-items-center flex-column">
                        <div className="inputBox d-flex my-2 w-75 justify-content-center align-items-center">
                          <InputLabel
                            type="password"
                            classDesign="me-3"
                            name="password"
                            functionHandler={(e) => InputHandlerRegister(e)}
                            placeholder="Nueva contraseña"
                            onBlurFunction={(e) => InputRegisterCheck(e)}
                          />
                        </div>
                        <div className="inputBox d-flex my-2 w-75 justify-content-center align-items-center">
                          <InputLabel
                            type="password"
                            classDesign="me-3"
                            name="password1"
                            functionHandler={(e) => InputHandlerRegister(e)}
                            placeholder="Confirmar nueva contraseña"
                            onBlurFunction={(e) => InputRegisterCheck(e)}
                          />
                        </div>
                      </div>
                    </>
                  )}
                  <div className="buttonsContainer w-100 mt-3 mb-2 d-flex justify-content-around align-items-center flex-column flex-xxl-row">
                    <Button
                      className=""
                      name="Cambiar contraseña"
                      path=""
                      functionButton={handlePasswordChangeClick}
                    />
                    {roleCheck !== 2 ? (
                      <Button
                        className="buttonAuthColor2"
                        name="Desactivar"
                        path=""
                        functionButton={handlePasswordChangeClick}
                      />
                    ) : null}
                    <Button
                      className=""
                      name="Guardar cambios"
                      path=""
                      functionButton={(e) => registerMeHandler(e)}
                    />
                  </div>
                </Col>
              ) : null}
              {selectedNavItem === "Mis pedidos" ? <Col>Pedidosss</Col> : null}
              {selectedNavItem === "Panel Admin" ? <Col>Admin panel</Col> : null}

            </Row>
          </Col>
        </Row>

        
      </Container>
    </>
  );
};
