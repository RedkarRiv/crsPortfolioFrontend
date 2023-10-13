import { useState } from "react";
import "./App.css";
import { loginMe, registerMe } from "./services/apiCall";
import jwt_decode from "jwt-decode";

function App() {
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
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setErrorMessage(error.response.data.message);
      });
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
      <div className="containerhome">
        <div className="formulario">
          <div className="titulo">LOGIN</div>
          <div className="nombrecampo">Usuario</div>
          <input
            type="text"
            className="campo"
            name="email"
            onChange={(e) => InputHandler(e)}
          />
          <div className="nombrecampo">Password</div>
          <input
            className="campo"
            type="password"
            name="password"
            onChange={(e) => InputHandler(e)}
          />
          <button className="botonenviar" onClick={(e) => logMe(e)}>
            Enviar
          </button>
        </div>

        <div className="formulario">
          <div className="titulo">REGISTRO</div>

          <div className="nombrecampo">firstName</div>
          <input
            type="text"
            className="campo"
            name="firstName"
            onChange={(e) => InputHandlerRegister(e)}
          />
          <div className="nombrecampo">lastName</div>
          <input
            type="text"
            className="campo"
            name="lastName"
            onChange={(e) => InputHandlerRegister(e)}
          />
          <div className="nombrecampo">email</div>
          <input
            type="text"
            className="campo"
            name="email"
            onChange={(e) => InputHandlerRegister(e)}
          />
          <div className="nombrecampo">Password</div>
          <input
            className="campo"
            type="password"
            name="password"
            onChange={(e) => InputHandlerRegister(e)}
          />
          <button className="botonenviar" onClick={(e) => registerMeHandler(e)}>
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
