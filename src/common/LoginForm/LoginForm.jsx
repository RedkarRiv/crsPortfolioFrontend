import React, { useState, useEffect } from "react";
import { loginMe } from "../../services/apiCall";
import jwt_decode from "jwt-decode";
import { InputLabel } from "../../common/InputLabel/InputLabel";
import { CheckError } from "../../services/useful";
import { Button } from "../../common/Button/Button";
import "./LoginForm.css";
import { login } from "../../pages/userSlice";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
    const dispatch = useDispatch();

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
        setErrorMessage("");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setErrorMessage(error.response.data.message);
      });
  };

  return <>
  
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
          <div className="errorMessageDesign">
            <p>{errorMessage}</p>
          </div>

          <Button name="Enviar" path="" functionButton={(e) => logMe(e)} />
        </div>
  
  
  </>;
};
