import React from 'react'
import Slider from 'react-slick';

import slider1 from './../../assets/images/slider.jpg'
import slider2 from './../../assets/images/slider4.jpg'
import slider3 from './../../assets/images/slider3.jpg'
import slider4 from './../../assets/images/slider5.jpg'

const imageSlider = () => {
    // Cấu hình cho slider
    const settings = {
      dots: true, 
      infinite: true, 
      speed: 100, 
      slidesToShow: 1, 
      autoplay: true, 
      autoplaySpeed: 1500, 
      fade: true,
    };
  
    // Dữ liệu ảnh 
    const images = [
        { 
            id: 1, 
            src: slider4
        },
        { 
            id: 2, 
            src: slider2
        },
        {
            id: 3, 
            src: slider3
        },
        {
          id: 4, 
          src: slider1
      },

    ];
  
    return (
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.src} className='w-100' />
          </div>
        ))}
      </Slider>
    );
  };
  
  export default imageSlider;