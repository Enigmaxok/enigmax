import React from 'react';
import Historia from './Historia';
import Perspectiva from './Perspectiva';
import Calidad from './Calidad';
import Experiencias from './Experiencias';
import logo from '../../assets/images/logo-what.webp'
import './whatIs.css'
const WhatIs = () => {
  return (
    <div className='whatIs-ctn'>
    <img className='logo-what' src={logo} alt="logo enigmax" />
      <Historia/>
      <Perspectiva/>
      <Calidad/>
  
    </div>
  );
};

export default WhatIs;