import React from "react";
import { useState } from "react";
import { InputLabel } from "../../common/InputLabel/InputLabel";
import { CheckError } from "../../services/useful";
import { Button } from "../../common/Button/Button";
import jwt_decode from "jwt-decode";
import "./RegisterForm.css";
import { loginMe, registerMe } from "../../services/apiCall";
import { useDispatch } from "react-redux";
import { login } from "../../pages/userSlice";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  //CHECK FIELDS
  const [errorMessage, setErrorMessage] = useState("");
  const [newCredentialsError, setNewCredentialsError] = useState({
    firstName: "",
    lastName: "",
    emailError: "",
    passwordError: "",
  });

  const InputRegisterCheck = (e) => {
    let mensajeError = CheckError(e.target.name, e.target.value);
    console.log("Esto son las newCredenciatlsError");
    console.log(newCredentialsError);
    setNewCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: mensajeError,
    }));
  };

  //REGISTER

  const [newCredentials, setNewCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const InputHandlerRegister = (e) => {
    setNewCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(newCredentials);
  };

  const registerMeHandler = () => {
    registerMe(newCredentials)
      .then((resultado) => {
        if (resultado.data.message == "No ha sido posible crear la cuenta") {
          setErrorMessage("Ya existe una cuenta con ese DNI o ese email");
        }

        if (resultado.data.id !== "undefined") {
          const instantLoginCredentials = {
            email: resultado.data.email,
            password: newCredentials.password,
          };
          loginMe(instantLoginCredentials)
            .then((resultado) => {
              let decoded = jwt_decode(resultado.data.token);
              console.log(resultado);
              let datosBackend = {
                token: resultado.data.token,
                user: decoded,
              };
              console.log(datosBackend);
              dispatch(login({ credentials: datosBackend }));

              setErrorMessage("");
            })
            .catch((error) => console.log(error));
          setErrorMessage(error.response.data.message);
        }

        setTimeout(() => {}, 1000);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <>
      <form className="registerFormDesign d-flex flex-column justify-content-center align-items-center">
        <div className="titleDesign">REGISTRO</div>
        <div className="fieldNameDesign">Nombre</div>
        <InputLabel
          type="text"
          classDesign="mb-2"
          name="firstName"
          functionHandler={(e) => InputHandlerRegister(e)}
          placeholder="Introduce tu nombre"
          onBlurFunction={(e) => InputRegisterCheck(e)}
        />{" "}
        <div className="errorDataDesign">
          <p>{newCredentialsError.firstNameError}</p>
        </div>
        <div className="fieldNameDesign">Apellido</div>
        <InputLabel
          type="text"
          classDesign="mb-2"
          name="lastName"
          functionHandler={(e) => InputHandlerRegister(e)}
          placeholder="Introduce tu apellido"
          onBlurFunction={(e) => InputRegisterCheck(e)}
        />{" "}
        <div className="errorDataDesign">
          <p>{newCredentialsError.lastNameError}</p>
        </div>
        <div className="fieldNameDesign">E-mail</div>
        <InputLabel
          type="text"
          placeholder="Introduce tu email"
          name="email"
          classDesign="mb-2"
          functionHandler={(e) => InputHandlerRegister(e)}
          onBlurFunction={(e) => InputRegisterCheck(e)}
        />
        <div className="errorDataDesign">
          <p>{newCredentialsError.emailError}</p>
        </div>
        <div className="fieldNameDesign">Password</div>
        <InputLabel
          type="password"
          classDesign="mb-2"
          name="password"
          autoComplete="current-password"
          functionHandler={(e) => InputHandlerRegister(e)}
          placeholder="Introduce tu password"
          onBlurFunction={(e) => InputRegisterCheck(e)}
        />
        <div className="errorDataDesign">
          <p>{newCredentialsError.passwordError}</p>
        </div>
        <Button
          name="Enviar"
          path=""
          functionButton={(e) => registerMeHandler(e)}
        />
        <div className="errorMessageDesign">
          <p>{errorMessage}</p>
        </div>
      </form>
    </>
  );
};
