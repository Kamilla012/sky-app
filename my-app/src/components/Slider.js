import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import MercuryImage from '../images/slider/Mercury.png';
import VenusImage from '../images/slider/Venus.png';
import EarthImage from '../images/slider/Earth.png';
import MarsImage from '../images/slider/Mars.png';
import JupiterImage from '../images/slider/Jupiter.png';
import SaturnImage from '../images/slider/Saturn.png';
import UranusImage from '../images/slider/Uranus.png';

function Slider() {
  return (
    <div className='flex justify-center'>
      <div className="container relative flex justify-between">
       
        <Swiper
          // effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
         
          slidesPerView={5}
          // style={{ margin: '100px' }}
          spaceBetween={20} // Set the space between slides
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          
          <SwiperSlide className='p-10 relative'>
             <img src={MercuryImage} alt="slide_image" className="absolute z-10 left-[100px] bottom-[300px]" />
              <div className='w-[200px] h-[300px] border-2 border-white rounded-lg shadow-lg shadow-white m-10 relative'>
              
               <p>Hello</p>
            </div>
            
          </SwiperSlide>
          <SwiperSlide>
            <img src={VenusImage} alt="slide_image" className="w-[250px] " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={EarthImage} alt="slide_image" className="w-[250px] " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MarsImage} alt="slide_image" className="w-[250px] " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={JupiterImage} alt="slide_image" className="w-[250px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SaturnImage} alt="slide_image" className="w-[250px] " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={UranusImage} alt="slide_image" className="w-[250px] " />
          </SwiperSlide>

          <div className="">
            <div className="swiper-button-prev">

            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-pagination"></div>
          </div> 
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;





