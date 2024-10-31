import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination ,Autoplay,EffectFade} from 'swiper/modules';
export const Photosessioncard = ({title,img}) => {
  return (
    <div style={{textAlign:'center',marginTop:'60px'}}>
    <Swiper pagination={true}  className="mySwiper "  spaceBetween={0}
 // centeredSlides={true}
 autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  effect={'Fade'}
  grabCursor={true}
  fadeEffect={{
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }}
  modules={[Pagination,Autoplay,EffectFade]}
  >
        <SwiperSlide className='slidercontainer2' >
        <div className='boxinbox '> 
            <div className='title'>{title}</div>
            </div>
            <div style={{height:'320px'}}> 
          <img style={{height:'320px'}}  loading='lazy' className='slidephoto w-100' src={img} alt='Home-Photo'/>
          </div>
          
          </SwiperSlide>
     
         
            
          




     
       
      </Swiper>
        
        </div>
  )
}
