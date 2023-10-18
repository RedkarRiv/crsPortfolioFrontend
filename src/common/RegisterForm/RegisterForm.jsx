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
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //FORM SELECTION
  const handleRegisterClickLogin = () => {
    navigate("/register?formSelection=1");
  };

  //CHECK FIELDS
  const [errorMessage, setErrorMessage] = useState("");
  const [newCredentialsError, setNewCredentialsError] = useState({
    firstName: "",
    lastName: "",
    emailError: "",
    passwordError: "",
    doubleCheckPasswordError: "",
  });

  const InputRegisterCheck = (e, password) => {
    let mensajeError = CheckError(e.target.name, e.target.value, password);
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
              navigate("/home");
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
          classDesign=""
          name="firstName"
          functionHandler={(e) => InputHandlerRegister(e)}
          placeholder="Introduce tu nombre"
          onBlurFunction={(e) => InputRegisterCheck(e)}
        />{" "}
        <div className="errorDataDesign">
          <div>{newCredentialsError.firstNameError}</div>
        </div>
        <div className="fieldNameDesign">Apellido</div>
        <InputLabel
          type="text"
          classDesign=""
          name="lastName"
          functionHandler={(e) => InputHandlerRegister(e)}
          placeholder="Introduce tu apellido"
          onBlurFunction={(e) => InputRegisterCheck(e)}
        />{" "}
        <div className="errorDataDesign">
          <div>{newCredentialsError.lastNameError}</div>
        </div>
        <div className="fieldNameDesign">E-mail</div>
        <InputLabel
          type="text"
          placeholder="Introduce tu email"
          name="email"
          classDesign=""
          functionHandler={(e) => InputHandlerRegister(e)}
          onBlurFunction={(e) => InputRegisterCheck(e)}
        />
        <div className="errorDataDesign">
          <div>{newCredentialsError.emailError}</div>
        </div>
        <div className="fieldNameDesign">Password</div>
        <InputLabel
          type="password"
          classDesign=""
          name="password"
          autoComplete="current-password"
          functionHandler={(e) => InputHandlerRegister(e)}
          placeholder="Introduce tu password"
          onBlurFunction={(e) => InputRegisterCheck(e)}
        />
        <div className="errorDataDesign">
          <div>{newCredentialsError.passwordError}</div>
        </div>
        <div className="fieldNameDesign">Repite Password</div>
        <InputLabel
          type="password"
          classDesign=""
          name="doubleCheckPassword"
          functionHandler={(e) => InputHandlerRegister(e)}
          placeholder="Repite tu password"
          onBlurFunction={(e) => InputRegisterCheck(e, newCredentials.password)}
        />
        <div className="errorDataDesign">
          <div>{newCredentialsError.doubleCheckPasswordError}</div>
        </div>
        <div className="authQuestion my-3 w-100 d-flex justify-content-center">
          <div className="authQuestionText me-2">¿Ya tienes cuenta?</div>
          <div className="authQuestionLink" onClick={handleRegisterClickLogin}>
            {" "}
            Iniciar sesión.
          </div>
        </div>
        <Button
          className="buttonAuthColor"
          name="Crear cuenta"
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
