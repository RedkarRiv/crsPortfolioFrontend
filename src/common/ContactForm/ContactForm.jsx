import React from "react";
import "./ContactForm.css";
import { InputLabel } from "../../common/InputLabel/InputLabel";
import { Button } from "../../common/Button/Button";

export const ContactForm = ({id}) => {
  return (
    <>
      <div id={id} className="contactSlideBG d-flex justify-content-center align-items-center py-5">
        <form className="contactFormDesign d-flex flex-column justify-content-center align-items-center">
          <div className="titleDesign">CONTACTO</div>
          <div className="fieldNameDesign">Nombre</div>
          <InputLabel
            type="text"
            maxLength={20}
            classDesign=""
            name="firstName"
            functionHandler={(e) => InputHandlerRegister(e)}
            placeholder="Introduce tu nombre"
            onBlurFunction={(e) => InputRegisterCheck(e)}
          />{" "}
          <div className="fieldNameDesign">E-mail</div>
          <InputLabel
            type="text"
            placeholder="Introduce tu email"
            name="email"
            maxLength={20}
            classDesign=""
            functionHandler={(e) => InputHandlerRegister(e)}
            onBlurFunction={(e) => InputRegisterCheck(e)}
          />
          <div className="fieldNameDesign">Comentario</div>
          <textarea
            type="textarea"
            className="commentInputDesign text-start"
            name="comment"
            maxLength={500}
            rows={6}
            placeholder="Escribe tu comentario"
          />
          <Button
            className="buttonAuthColor my-3"
            name="Enviar mensaje"
            path=""
            functionButton={(e) => registerMeHandler(e)}
          />
        </form>
      </div>
    </>
  );
};
