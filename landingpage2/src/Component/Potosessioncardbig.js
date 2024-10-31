import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination ,Autoplay,EffectFade} from 'swiper/modules';
import Bounce from 'react-reveal/Bounce';

export const Potosessioncardbig = ({title,img}) => {
  return (
    <div style={{textAlign:'center',width:'100%',height:'200px',marginTop:'10px'}}>
      <Bounce>
     <Swiper pagination={true}  className="mySwiper "  spaceBetween={0}
 centeredSlides={true}
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
        <div className='boxinbox2 '> 
            <div className='title'>{title}</div>
            </div>
            <div style={{height:'300px'}}> 
            <div style={{backgroundImage:`url(${img})`}} className='banner'></div> 
           </div>
          
          </SwiperSlide>
     
         
      
          




     
       
      </Swiper> 
      </Bounce>
        </div>
  )
}
