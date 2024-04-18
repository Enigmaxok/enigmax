import React, { useState } from 'react';
import './contact.css';
import detective from '../../assets/images/detective-contacto2.png'
import enviar from '../../assets/images/enviar-contacto.png'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar el formulario, por ejemplo, mediante una API o enviar un correo electrónico.
    console.log('Formulario enviado:', formData);
    // Puedes restablecer el formulario después de enviarlo si es necesario
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  return (
    <div className='contact-ctn'>
      
      <div className='contact-detective' style={{ marginTop: '5%' }}>
        <img src={detective} alt="" />
      </div>
      
    <div className="form-container" style={{ marginTop: '5%' }}>
      <h2>Contacto</h2>
      <div className='border'></div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nombre:
        </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>
          Correo Electrónico:
        </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>
          Mensaje:
        </label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
      </form>
        <button type="submit">
          <img src={enviar} alt="" />
          <h3>

          Enviar
          </h3>
          
          </button>
    </div>
    </div>
  );
};

export default ContactForm;
