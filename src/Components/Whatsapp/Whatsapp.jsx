import React from 'react';
import wp from "../../assets/images/Wp.png";
import './whatsapp.css'
const Whatsapp =()=> {
    const numeroTelefono = '+5491172046762';  

    const abrirChatWhatsApp = () => {
      const url = `https://wa.me/${numeroTelefono}`;
      window.open(url, '_blank');
    };
  
  return (
    <div className='wsp-icon'>
               <img src={wp} alt="logo whatsapp"  onClick={abrirChatWhatsApp} target="_blank"  />
 
    </div>
  );
}

export default Whatsapp;