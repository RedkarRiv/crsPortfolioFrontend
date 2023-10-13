import { useState } from "react";
import "./App.css";
import { loginMe } from "./services/apiCall";
import jwt_decode from "jwt-decode";

function App() {

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  
  const InputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(credentials)
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
        console.log(datosBackend)
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setErrorMessage(error.response.data.message)
      });
  };



  return (
    <>
      <div className="containerhome">
        <div className="formulario">
          <div className="nombrecampo">Usuario</div>
          <input type="text" className="campo" name="email" onChange={(e) => InputHandler(e)} />
          <div className="nombrecampo">Password</div>
          <input className="campo" type="password" name="password" onChange={(e) => InputHandler(e)} />
          <button className="botonenviar" onClick={(e) => logMe(e)}>Enviar</button>
        </div>
      </div>
    </>
  );
}

export default App;
