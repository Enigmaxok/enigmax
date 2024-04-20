import React from 'react';
import {title, text, text2, images, highlightedTitle} from './constants'
import './description.css'
const Description = () => {
  return (
    <div className="description-container">
      <div className="title-container">
      <h2>{title} <span className="highlighted-title">{highlightedTitle}</span></h2>
      </div>
      <div className="description-text">
        <div className="text-container-des">
          <p>{text}</p>
        </div>
        <div className="text-container-des">
          <p>{text2}</p>
        </div>
      </div>
      <div className="image-container-des">
  {images.map((image, index) => (
    <div key={index} className={index % 2 === 0 ? 'portrait-container left-tilt' : 'portrait-container right-tilt'}>
      <img src={image.src} alt={image.alt} className="portrait-image" />
      <p className="portrait-name">{image.name}</p>
    </div>
  ))}
</div>
    </div>
  );
};

export default Description;