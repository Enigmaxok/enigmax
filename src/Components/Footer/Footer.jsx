import React from "react";
import "./footer.css";
import logo from "../../assets/images/Logo.png";
import face from "../../assets/images/facebook.png";
import insta from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import tiktok from "../../assets/images/tiktok.png";
import detective from "../../assets/images/contacto-detective.webp";
import wp from "../../assets/images/Wp.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {

 
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contacto");
  };

  return (
    <div className="footer">
      {" "}
      {/* Aplica la clase 'footer' al div principal */}
      <footer>
   
        <div className="footer-content">
          <div className="logo-container">
            <img src={logo} alt="logo enigmax" />
          </div>
          <div className="redes-footer">
      <a href="https://www.instagram.com/enigmax.ok/" target="_blank" rel="noopener noreferrer">
        <img src={insta} alt="logo instagram" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61550894446988&locale=es_LA" target="_blank" rel="noopener noreferrer">
        <img src={face} alt="logo facebook" />
      </a>
      <a href="https://www.tiktok.com/@enigmax.ok" target="_blank" rel="noopener noreferrer">
        <img src={tiktok} alt="logo tiktok" />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <img src={youtube} alt="logo youtube" />
      </a>
     
    </div>
          <div className="contact-container">
            <button onClick={handleContactClick}> Contacto </button>
            <img className="detective-footer" src={detective} alt="" style={{width:'350px'}} />
          </div>
        </div>
   
      </footer>
    </div>
  );
};

export default Footer;
