import React, { Component } from "react";
import Slider from "react-slick";



export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div id="depoimentos" className="pageContent background">
        <h1 className="titleDepoimentSection"> Depoimentos </h1>
        <Slider {...settings}>
          <div className="cardDepoiment">
            <img src="img/ban1.jpg" alt="foto1"/>
            <h1>Nome Depoimento</h1>
            <p>"accumsan enim sed risus aliquet, sed faucibus turpis venenatis. Duis efficitur sed lacus ac lacinia."</p>
          </div>

          <div className="cardDepoiment">
            <img src="img/ban2.jpg" alt="foto2"/>
            <h1>Nome Depoimento</h1>
            <p>"accumsan enim sed risus aliquet, sed faucibus turpis venenatis. Duis efficitur sed lacus ac lacinia."</p>
          </div>


          <div className="cardDepoiment">
            <img src="img/ban3.jpg" alt="foto3"/>
            <h1>Nome Depoimento</h1>
            <p>"accumsan enim sed risus aliquet, sed faucibus turpis venenatis. Duis efficitur sed lacus ac lacinia."</p>
          </div>


          <div>
            <h3>4</h3>
          </div>

          <div>
            <h3>5</h3>
          </div>

          <div>
            <h3>6</h3>
          </div>

          <div>
            <h3>7</h3>
          </div>

          <div>
            <h3>8</h3>
          </div>

          <div>
            <h3>9</h3>
          </div>
          
        </Slider>
      </div>
    );
  }
}