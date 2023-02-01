import React, { Component } from "react";
import Slider from "react-slick";
import './AutoSlider.scss'

  const AutoSlider =()=> {
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };
    return (
      <div>
      
        <Slider {...settings}>
          <div>
            <h3><div className="auto-slider-img"><img src="	https://staging.postlater.io/assets/landing/img/partner-kiwi.png" alt="" /></div></h3>
          </div>
          <div>
            <h3><div  className="auto-slider-img"><img src="https://staging.postlater.io/assets/landing/img/partner-webwork.png" alt="" /></div></h3>
          </div>
          <div>
            <h3><div  className="auto-slider-img"><img src="	https://staging.postlater.io/assets/landing/img/partner-programmer.png" alt="" /></div></h3>
          </div>
          <div>
            <h3><div  className="auto-slider-img"><img src="	https://staging.postlater.io/assets/landing/img/partner-webwork.png" alt="" /></div></h3>
          </div>
          <div>
            <h3><div  className="auto-slider-img"><img src="	https://staging.postlater.io/assets/landing/img/partner-evistep.png" alt="" /></div></h3>
          </div>
          <div>
            <h3><div  className="auto-slider-img"><img src="	https://staging.postlater.io/assets/landing/img/partner-prismateq.png" alt="" /></div></h3>
          </div>
        </Slider>
      </div>
    );
  
}
export default AutoSlider