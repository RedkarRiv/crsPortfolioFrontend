import React from "react";
import { useState } from "react";
import { InputLabel } from "../../common/InputLabel/InputLabel";
import { CheckError } from "../../services/useful";
import { Button } from "../../common/Button/Button";
import jwt_decode from "jwt-decode";
import "./RegisterForm.css";
import { loginMe, registerMe } from "../../services/apiCall";

export const RegisterForm = () => {
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
              setErrorMessage("");
            })
            .catch((error) => console.log(error));
        }

        setTimeout(() => {}, 1000);
      })
      .catch((error) => {
        console.log(error);

      });
  };

  return (
    <>
      <form className="formularioReg">
        <div className="titulo">REGISTRO</div>

        <div className="nombrecampo">Nombre</div>
        <InputLabel
          type="text"
          classDesign=""
          name="firstName"
          functionHandler={(e) => InputHandlerRegister(e)}
          placeholder="Introduce tu nombre"
          onBlurFunction={(e) => InputRegisterCheck(e)}
        />
        <div className="nombrecampo">Apellido</div>
        <InputLabel
          type="text"
          classDesign=""
          name="lastName"
          functionHandler={(e) => InputHandlerRegister(e)}
          placeholder="Introduce tu apellido"
          onBlurFunction={(e) => InputRegisterCheck(e)}
        />
        <div className="nombrecampo">E-mail</div>
        <InputLabel
          type="text"
          placeholder="Introduce tu email"
          name="email"
          classDesign=""
          functionHandler={(e) => InputHandlerRegister(e)}
          onBlurFunction={(e) => InputRegisterCheck(e)}
        />

        <div className="nombrecampo">Password</div>
        <InputLabel
          type="password"
          classDesign=""
          name="password"
          autoComplete="current-password"
          functionHandler={(e) => InputHandlerRegister(e)}
          placeholder="Introduce tu password"
          onBlurFunction={(e) => InputRegisterCheck(e)}
        />
        <div className="errorMessageDesign">
          <p>{errorMessage}</p>
        </div>

        <Button
          name="Enviar"
          path=""
          functionButton={(e) => registerMeHandler(e)}
        />
      </form>
    </>
  );
};
