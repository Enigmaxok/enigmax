import React from 'react';
import Slider from 'react-slick';
import './experiencias.css';
import { tarjetas } from './constants';
import Card from '../../../Components/Cards/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Experiencias = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,  
    slidesToScroll: 1,
    autoplay: true,
 
    centerPadding: '60px', // Ajustar según sea necesario
 
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="experiencias-container">
      <h2>
        <span className='highlighted-title'>Experiencias</span>
      </h2>
      <div className='slider'>
          <Slider {...settings} className="custom-slider">
        {tarjetas.map((tarjeta, index) => (
          <div key={index}>
            <Card {...tarjeta} />
          </div>
        ))}
      </Slider>
        
        </div>   
    </div>
  );
};

export default Experiencias;