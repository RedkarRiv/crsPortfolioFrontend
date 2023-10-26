import React from "react";
import { useState } from "react";
import "./ContactForm.css";
import { InputLabel } from "../../common/InputLabel/InputLabel";
import { Button } from "../../common/Button/Button";
import { CheckError } from "../../services/useful";
import { contactMe } from "../../services/apiCall";
import { Col, Row } from "react-bootstrap";

export const ContactForm = ({ id }) => {
  //RESET FORM
  const [resetForm, setResetForm] = useState(false);

  //CHECK FIELDS
  const [errorMessage, setErrorMessage] = useState("");
  const [newContactError, setNewContactError] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
  });

  const InputContactCheck = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setNewContactError((prevState) => ({
        ...prevState,
        [e.target.name + "Error"]: "",
      }));
      return;
    }

    const mensajeError = CheckError(e.target.name, inputValue);
    setNewContactError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: mensajeError,
    }));
  };

  //CONTACT
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const InputHandlerContact = (e) => {
    setNewContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(newContact);
  };

  const sendContactHandler = () => {
    contactMe(newContact)
      .then((resultado) => {
        console.log(resultado);
        setErrorMessage("");
        setFeedbackMessage(resultado.data.message);
        setResetForm(true);
        setTimeout(() => {
          setFeedbackMessage("");
        }, 10000);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <>
      <div
        className="contactSlideBG d-flex justify-content-center align-items-center p-0 mt-3"
        id={id}
      >
        <Row className="contactFormDesign m-0 w-100 d-flex justify-content-center">
          <Col className="col-12 col-md-6 m-0 p-0 d-flex flex-column justify-content-center align-items-center">
            <form className="d-flex flex-column justify-content-center align-items-center w-100">
              <div className="fs-1 text-light fw-bold mb-3 mt-5">CONTACTO</div>
              <div className="my-1 text-light fw-bold">Nombre</div>
              <InputLabel
                type="text"
                maxLength={20}
                classDesign="w-75 text-center rounded p-1"
                name="name"
                value={resetForm ? "" : newContact.name}
                functionHandler={(e) => InputHandlerContact(e)}
                placeholder="Introduce tu nombre"
                onBlurFunction={(e) => InputContactCheck(e)}
              />{" "}
              <div className="errorContactDesign">
                {newContactError.nameError}
              </div>
              <div className="my-1 text-light fw-bold">E-mail</div>
              <InputLabel
                type="text"
                placeholder="Introduce tu email"
                name="email"
                value={resetForm ? "" : newContact.email}
                maxLength={20}
                classDesign="w-75 text-center rounded p-1"
                functionHandler={(e) => InputHandlerContact(e)}
                onBlurFunction={(e) => InputContactCheck(e)}
              />
              <div className="errorContactDesign">
                {newContactError.emailError}
              </div>
              <div className="my-1 text-light fw-bold">Comentario</div>
              <textarea
                type="textarea"
                className="commentInputDesign w-75 text-start rounded p-2"
                name="message"
                maxLength={500}
                rows={6}
                value={resetForm ? "" : newContact.message}
                placeholder="Escribe tu comentario"
                onBlur={(e) => InputContactCheck(e)}
                onChange={(e) => InputHandlerContact(e)}
              />
              <div>{newContactError.messageError}</div>
              <div className="informationContactForm">
                <div className="p-1">{feedbackMessage}</div>
              </div>
              <Button
                className="buttonAuthColor my-2"
                name="Enviar mensaje"
                path=""
                functionButton={(e) => sendContactHandler(e)}
              />
              <div className="errorContactDesign">
                <p>{errorMessage}</p>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
};
