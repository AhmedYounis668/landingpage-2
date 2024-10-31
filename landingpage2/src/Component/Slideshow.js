import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import sliderphoto from '../Images/bg-photo.jpeg'
import { Navbarheader } from './Navbarheader';
import Fade from 'react-reveal/Fade';

export const Slideshow = () => {
  return (
    <div>
      <Navbarheader/>
<Fade>
 <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper"
      >

        <SwiperSlide className='slidshowheader' >  <img className='slidshowheader' src={sliderphoto} alt='slider-photo' loading='lazy'/>
        </SwiperSlide>
      </Swiper>
      </Fade>
    </div>
  )
}
