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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmSend = window.confirm("¿Realmente deseas enviar este mensaje?");
    if (confirmSend) {
      try {
        const response = await fetch("https://www.enigmax.com.ar/api/send-email", { // Actualiza la URL al endpoint en tu servidor
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        alert(data.message);
      } catch (error) {
        console.error("Error al enviar el correo:", error);
      }
    } else {
      return;
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
console.log(formData)
  return (
    <div className="contact-ctn">
      <div className="contact-detective" style={{ marginTop: "5%" }}>
        <img src={detective} alt="" />
      </div>

      <div className="form-container" style={{ marginTop: "5%" }}>
        <h2>Contacto</h2>
        <div className="border"></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type="text" name="name" onChange={handleChange} required />
          <label>Correo Electrónico:</label>
          <input type="email" name="email" onChange={handleChange} required />
          <label>Mensaje:</label>
          <textarea name="message" onChange={handleChange} required />
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

 