import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const closeMenu = () => {
    setShowMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    closeMenu();
    setActiveMenuItem(path);
  };

  return (
    <div className={`header ${showMenu ? 'showMenu' : ''}`}>
      <div className='brand'>
        <img src={logo} alt='' />
      </div>
      <div className={`menu-icon ${showMenu ? 'show' : ''}`} onClick={() => setShowMenu(!showMenu)}>
        <div className='icono-ham'>{showMenu ? '✕' : '☰'}</div>
      </div>
      <div className={`links ${showMenu ? 'show' : ''}`}>
        <nav>
          <ul>
            <li onClick={() => handleMenuItemClick('/')} className={activeMenuItem === '/' ? 'active' : ''}>Home</li>
            <div className="linea-separadora"></div> 
            <li onClick={() => handleMenuItemClick('/seccion1')} className={activeMenuItem === '/seccion1' ? 'active' : ''}>¿Qué es Enigmax?</li>
            <div className="linea-separadora"></div> 
            <li onClick={() => handleMenuItemClick('/eventos')} className={activeMenuItem === '/eventos' ? 'active' : ''}>Eventos</li>
            <div className="linea-separadora"></div> 
            <li onClick={() => handleMenuItemClick('/contacto')} className={activeMenuItem === '/contacto' ? 'active' : ''}>Contacto</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;