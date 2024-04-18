import React from 'react';
import "./footer.css"
import logo from '../../assets/images/Logo.png'
import face from '../../assets/images/facebook.png'
import insta from '../../assets/images/instagram.png'
import youtube from '../../assets/images/youtube.png'
import tiktok from '../../assets/images/tiktok.png'
import detective from '../../assets/images/contacto-detective.webp'
import wp from '../../assets/images/Wp.png'
const Footer = () => {
  return (
    <div className='footer'> {/* Aplica la clase 'footer' al div principal */}
      <footer >
        <div  className='wp'>

        <img  src={wp} alt="logo whatsapp" />
        </div>
        <div className='footer-content'>
          <div className='logo-container'>
            <img src={logo} alt="logo enigmax" />
          </div>
            <div className='redes-footer'>
              <img src={face} alt="logo facebook" />
              <img src={insta} alt="logo instagram" />
              <img src={youtube} alt="logo youtube" />
              <img src={tiktok} alt="logo tiktok" />
            </div>
          <div className='contact-container'>
            <button> Contacto </button>
            <img className='detective-footer' src={detective} alt="" />
          </div>
        </div>
        <div className='copyright'>

        <p>&copy; 2024 ENIGMAX. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;