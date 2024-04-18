import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import logo from "../../assets/images/logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  // Agrega un evento para cambiar la clase del header cuando se hace scroll
  window.onscroll = () => {
    const header = document.querySelector('.header');
    if (header) {
      if (window.pageYOffset > 0) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
  };

  return (
    <div className={`header ${showMenu ? 'showMenu' : ''}`}>
      <div className='brand'>
        <img src={logo} alt="" />
      </div>
      <div className={`menu-icon ${showMenu ? 'show' : ''}`} onClick={() => setShowMenu(!showMenu)}>
        &#8801;
      </div>
      <div className={`links ${showMenu ? 'show' : ''}`}>
        <nav>
          <ul>
            <li onClick={() => { navigate('/'); closeMenu(); }}>Home</li>
            <li onClick={() => { navigate('/seccion1'); closeMenu(); }}>¿Qué es Enigmax?</li>
            <li onClick={() => { navigate('/eventos'); closeMenu(); }}>Eventos</li>
            <li onClick={() => { navigate('/contacto'); closeMenu(); }}>Contacto</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;