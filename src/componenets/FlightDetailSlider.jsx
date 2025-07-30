import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlightDetailCard from './FlightDetailCard';

function FlightDetailSlider({children}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (current, next) => {
      console.log("before change", current, next);
    },
    afterChange: (current) => {
      console.log("after change", current);
    }
  };

  return (
    <div className='px-2 '>
    <div className="slider-container ">
      <Slider {...settings} className='slider-dots'>
        {children}
       
      </Slider>
    </div>
  </div>
  );
}

export default FlightDetailSlider;
