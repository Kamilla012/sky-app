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
      <div className="container w-[70%]">
        <h1 className="heading">Flower Gallery</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={30} // Set the space between slides
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
          {/* Adjust image size and add margin */}
          <SwiperSlide>
            <img src={MercuryImage} alt="slide_image" className="w-[250px] " />
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

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
            <div className="swiper-pagination"></div>
          </div> 
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
