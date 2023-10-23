import React, { useState, useEffect } from "react";
import { loginMe } from "../../services/apiCall";
import jwt_decode from "jwt-decode";
import { InputLabel } from "../../common/InputLabel/InputLabel";
import { CheckError } from "../../services/useful";
import { Button } from "../../common/Button/Button";
import "./LoginForm.css";
import { login } from "../../pages/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //FORM SELECTION
  const handleRegisterClickRegister = () => {
    navigate("/authform?formSelection=0");
  };

  //CHECK FIELDS
  const [errorMessage, setErrorMessage] = useState("");
  const [credentialsError, setCredentialsError] = useState({
    emailError: "",
    passwordError: "",
  });

  const InputCheck = (e) => {
    let mensajeError = CheckError(e.target.name, e.target.value);
    console.log("Esto son las credenciatlsError");
    console.log(credentialsError);
    setCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: mensajeError,
    }));
  };

  //LOGIN
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const InputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(credentials);
  };

  const logMe = (e) => {
    e.preventDefault();

    loginMe(credentials)
      .then((resultado) => {
        let decoded = jwt_decode(resultado.data.token);
        let datosBackend = {
          token: resultado.data.token,
          user: decoded,
        };
        console.log(datosBackend);
        dispatch(login({ credentials: datosBackend }));
        navigate("/profile");
        setErrorMessage("");
      })
      .catch((error) => {
        console.log(error);
        if (error?.response?.data?.message) {
          setErrorMessage(error?.response?.data?.message);
        }
        setErrorMessage(
          "No se ha podido conectar. Contacte con el administrador"
        );
      });
  };

  return (
    <>
      <div className="formDesign">
        <div className="titleDesign">LOGIN</div>
        <div className="fieldNameDesign">Usuario</div>
        <InputLabel
          type="text"
          placeholder="Introduce tu email"
          name="email"
          classDesign=""
          functionHandler={(e) => InputHandler(e)}
          onBlurFunction={(e) => InputCheck(e)}
        />
        <div className="fieldNameDesign">Password</div>
        <InputLabel
          type="password"
          classDesign=""
          name="password"
          functionHandler={(e) => InputHandler(e)}
          placeholder="Introduce tu password"
          onBlurFunction={(e) => InputCheck(e)}
        />
        <div className="errorMessageDesign my-2">
          <p className="m-0">{errorMessage}</p>
        </div>
        <div className="authQuestion my-3 w-100 d-flex justify-content-center">
          <div className="authQuestionText me-2">¿No tienes cuenta?</div>
          <div
            className="authQuestionLink"
            onClick={handleRegisterClickRegister}
          >
            {" "}
            Crear cuenta.
          </div>
        </div>
        <Button
          className="buttonAuthColor"
          name="Enviar"
          path=""
          functionButton={(e) => logMe(e)}
        />
      </div>
    </>
  );
};
