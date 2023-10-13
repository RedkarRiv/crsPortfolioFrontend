import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="containerhome">
        <div className="formulario">
          <div className="nombrecampo">Usuario</div>
          <input type="text" className="campo" />
          <div className="nombrecampo">Password</div>
          <input className="campo" type="password" />
        </div>
      </div>
    </>
  );
}

export default App;
