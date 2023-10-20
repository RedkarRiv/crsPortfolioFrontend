import React, { useEffect, useState } from "react";
import "./ProfilePanel.css";
import { Col, Container, Row } from "react-bootstrap";
import { InputLabel } from "../../common/InputLabel/InputLabel";
import { getProfile } from "../../services/apiCall";
import { useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";
import { Button } from "../../common/Button/Button";

export const ProfilePanel = () => {
  const credentialsRdx = useSelector(userDataCheck);
  const credentialCheck = credentialsRdx?.credentials?.token;

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
        <Row className="w-100 d-flex px-5 m-0 justify-content-around">
          <Col className="slideProfile col-8">
            <Row className="w-100 h-100 d-flex p-0 m-0 justify-content-center">
              <Col className="col-6 pt-3">
                <div className="h-100 d-flex justify-content-center align-items-center flex-column">
                  <div className="avatarImg"></div>
                  <div className="avatarChoose py-1 d-flex justify-content-center align-items-center">
                    Cambiar avatar{" "}
                  </div>
                  <div className="nameProfile d-flex justify-content-center align-items-center">
                    {userData.firstName +" "+userData.lastName}
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    {"Usuario desde: "} + {userData.createdAt}
                  </div>
                </div>
              </Col>
              <Col className="col-6 d-flex align-items-center justify-content-center flex-column">
                <div className="h-75 w-100 d-flex justify-content-around align-items-center flex-column">
                  <div className="inputBox d-flex w-100 justify-content-center align-items-center">
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
                  <div className="inputBox d-flex w-100 justify-content-center align-items-center">
                    <div className="updateIcon px-2">✎</div>

                    <InputLabel
                      type="text"
                      classDesign="me-3"
                      name="lastName"
                      functionHandler={(e) => InputHandlerRegister(e)}
                      placeholder={"Apellido: " + userData.lastName}
                      onBlurFunction={(e) => InputRegisterCheck(e)}
                    />
                  </div>{" "}
                  <div className="inputBox d-flex w-100 justify-content-center align-items-center">
                    <div className="updateIcon px-2">✎</div>

                    <InputLabel
                      type="password"
                      classDesign="me-3"
                      name="password"
                      functionHandler={(e) => InputHandlerRegister(e)}
                      placeholder={"Password: ********* "}
                      onBlurFunction={(e) => InputRegisterCheck(e)}
                    />
                  </div>{" "}
                  <div className="inputBox d-flex w-100 justify-content-center align-items-center">
                    <div className="iconTransp px-2">✎</div>
                    <InputLabel
                      type="password"
                      classDesign="me-3"
                      name="password"
                      functionHandler={(e) => InputHandlerRegister(e)}
                      placeholder="Repita Password"
                      onBlurFunction={(e) => InputRegisterCheck(e)}
                    />
                  </div>
                </div>
                <Button
                  className="buttonAuthColor"
                  name="Actualizar"
                  path=""
                  functionButton={(e) => registerMeHandler(e)}
                />{" "}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
