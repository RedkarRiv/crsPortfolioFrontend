import React from "react";
import "./Register.css";
import { RegisterForm } from "../../common/RegisterForm/RegisterForm";
import { LoginForm } from "../../common/LoginForm/LoginForm";

export const Register = () => {
  return (
    <>
      <div className="registerBackgroundDesign d-flex justify-content-around align-items-center flex-row">
        <div className="formContainer d-flex justify-content-center align-items-center">
          <RegisterForm />
       
        </div>
        <div className="formContainer d-flex justify-content-center align-items-center">
            <LoginForm />
          </div>{" "}
      </div>
    </>
  );
};
