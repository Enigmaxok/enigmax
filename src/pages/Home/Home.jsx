import React from 'react';
import './home.css'
import Intro from './Intro/Intro';
import Description from './Description/Description';
import HowToPlay from './HowToPlay/HowToPlay';
import Experiencias from './Experiencias/Experiencias';
const Home = () => {
  return (
    <div className="home-container">
 
  <Intro />
 <Description/>
 <HowToPlay/>
 <Experiencias/>
    </div>
  );
};

export default Home;