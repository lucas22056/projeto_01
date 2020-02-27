import React, { Component } from 'react'
import { Slide, Fade } from 'react-slideshow-image';

const fadeImages = [
  'img/ban1.jpg',
  'img/ban2.jpg',
  'img/ban3.jpg'
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}

const MainSlide = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[0]} />
        </div>
        
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} />
        </div>
        
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} />
        </div>
        
      </div>
    </Fade>
  )
}

export default MainSlide;