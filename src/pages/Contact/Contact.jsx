import React, { useState } from "react";
import "./contact.css";
import detective from "../../assets/images/detective-contacto2.png";
import enviar from "../../assets/images/enviar-contacto.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmSend = window.confirm("¿Realmente deseas enviar este mensaje?");
    if (confirmSend) {
   
      e.target.submit();
    } else {
 
      return;
    }
  };

  return (
    <div className="contact-ctn">
      <div className="contact-detective" style={{ marginTop: "5%" }}>
        <img src={detective} alt="" />
      </div>

      <div className="form-container" style={{ marginTop: "5%" }}>
        <h2>Contacto</h2>
        <div className="border"></div>
        <form
          className="contact-form"
          action="https://formsubmit.co/enigmaxweb@gmail.com"
          method="POST"
          onSubmit={handleSubmit} 
        >
          <label>Nombre:</label>
          <input type="text" name="name" required />
          <label>Correo Electrónico:</label>
          <input type="email" name="email" required />
          <label>Mensaje:</label>
          <textarea name="message" required />
          <button type="submit">
            <img src={enviar} alt="" />
            <h3>Enviar</h3>
          </button>
        </form>
        <div className="contact-detective-mobile" style={{ marginTop: "5%" }}>
          <img src={detective} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;