import React, { useEffect, useState } from "react";
import "./MyProfile.css";
import { Col } from "react-bootstrap";
import { InputLabel } from "../../common/InputLabel/InputLabel";
import { getProfile } from "../../services/apiCall";
import { Button } from "../../common/Button/Button";
import moment from "moment";
import { useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";
import { useNavigate } from "react-router-dom";

export const MyProfile = () => {
  const navigate = useNavigate();
  const credentialsRdx = useSelector(userDataCheck);
  const credentialCheck = credentialsRdx?.credentials?.token;
  const roleCheck = credentialsRdx?.credentials?.user?.roleId;

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

  //EDIT PROFILE DATA FIRSTNAME
  const [enableEditingDataFirstname, setEnableEditingDataFirstname] =
    useState(false);
  const handleEnableEditingDataName = () => {
    setEnableEditingDataFirstname(!enableEditingDataFirstname);
  };

  //EDIT PROFILE DATA LASTNAME
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

  return (
    <Col className="d-flex col-11 col-md-11 h-100 justify-content-center m-0 p-0 flex-column">
      <div className="d-flex mt-4 pe-2 w-100 justify-content-center align-items-center">
        {!enableEditingDataFirstname ? (
          <>
            <div className="profileDataDesign d-flex justify-content-between text-light px-4">
              <div className="profileDataTitle me-2">Nombre:</div>{" "}
              {userData.firstName}
              <div
                className="updateIcon"
                onClick={() => handleEnableEditingDataName()}
              >
                ✎
              </div>
            </div>
          </>
        ) : (
          <div className="d-flex my-2 w-75 justify-content-center align-items-center">
            <InputLabel
              type="text"
              classDesign="intputSize"
              name="firstName"
              functionHandler={(e) => InputHandlerRegister(e)}
              placeholder="Nuevo nombre"
              onBlurFunction={(e) => InputRegisterCheck(e)}
            />
            <div
              className="updateIcon ms-5"
              onClick={() => handleEnableEditingDataName()}
            >
              ✎
            </div>
          </div>
        )}
      </div>
      <div className="d-flex mt-4 pe-2 w-100 justify-content-center align-items-center">
        {!enableEditingDataLastname ? (
          <>
            <div className="profileDataDesign d-flex justify-content-between text-light px-4">
              <div className="profileDataTitle me-2">Apellido:</div>{" "}
              {userData.lastName}
              <div
                className="updateIcon"
                onClick={() => handleEnableEditingDataLastname()}
              >
                ✎
              </div>
            </div>
          </>
        ) : (
          <div className="inputBox d-flex my-2 w-75  justify-content-center align-items-center">
            <InputLabel
              type="text"
              classDesign="intputSize"
              name="lastName"
              functionHandler={(e) => InputHandlerRegister(e)}
              placeholder="Nuevo apellido"
              onBlurFunction={(e) => InputRegisterCheck(e)}
            />{" "}
            <div
              className="updateIcon ms-5"
              onClick={() => handleEnableEditingDataLastname()}
            >
              ✎
            </div>
          </div>
        )}
      </div>
      <div className="d-flex mt-4 w-100 justify-content-center align-items-center">
        <div className="updateIcon"></div>
        <div className="profileDataDesign d-flex justify-content-between text-light px-4">
          <div className="profileDataTitle me-2">Email:</div> {userData.email}
        </div>
      </div>
      <div className="d-flex mt-4 w-100 justify-content-center align-items-center">
        <div className="updateIcon"></div>
        <div className="profileDataDesign d-flex justify-content-between text-light px-4">
          <div className="profileDataTitle me-2">Estado:</div>{" "}
          {userData.userStatus ? "Activa" : "Inactiva"}
        </div>
      </div>
      <div className="d-flex mt-4 w-100 justify-content-center align-items-center">
        <div className="updateIcon"></div>
        <div className="profileDataDesign d-flex justify-content-between text-light px-4">
          <div className="profileDataTitle me-2">Creación:</div> {formatedDated}
        </div>
      </div>
      {changePasswordClicked && (
        <>
          <div className="w-100 d-flex justify-content-center mt-5 align-items-center flex-column">
            <div className="d-flex my-2 w-75 justify-content-center align-items-center">
              <InputLabel
                type="password"
                classDesign="me-3 intputSize"
                name="password"
                functionHandler={(e) => InputHandlerRegister(e)}
                placeholder="Nueva contraseña"
                onBlurFunction={(e) => InputRegisterCheck(e)}
              />
            </div>
            <div className="d-flex my-2 w-75 justify-content-center align-items-center">
              <InputLabel
                type="password"
                classDesign="me-3 intputSize"
                name="password1"
                functionHandler={(e) => InputHandlerRegister(e)}
                placeholder="Confirmar nueva contraseña"
                onBlurFunction={(e) => InputRegisterCheck(e)}
              />
            </div>
          </div>
        </>
      )}
      <div className="buttonsContainer w-100  mb-2 d-flex justify-content-center align-items-center flex-row">
        <Button
          className="me-2 text-center"
          name="Cambiar contraseña"
          path=""
          functionButton={handlePasswordChangeClick}
        />
        {roleCheck !== 2 ? (
          <Button
            className="buttonAuthColor2 me-2"
            name="Desactivar"
            path=""
            functionButton={handlePasswordChangeClick}
          />
        ) : null}
        <Button
          className="text-center"
          name="Guardar cambios"
          path=""
          functionButton={(e) => registerMeHandler(e)}
        />
      </div>
    </Col>
  );
};
