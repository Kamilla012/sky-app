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
import NeptuneImage from '../images/slider/Neptune.png';
import styles from '../style';

function Slider() {
  return (
    <div className='flex items-center justify-center'>
      <div className="w-[80%] container">
       
        <Swiper
          // effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
        
          slidesPerView={1}
          spaceBetween={0}  
          breakpoints={{
            // Kiedy szerokość ekranu jest mniejsza niż 768px (dla małych ekranów)
            768: {
              slidesPerView: 3, // Zmniejszamy do jednego slajdu na małych ekranach
            },
          }}   
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
          className="swiper_container flex justify-center"
        >
          
          <SwiperSlide>

              <div className={`${styles.SliderDiv}`}>
              <img src={MercuryImage} alt="slide_image" className='w-[150px]' />
              <h4 className={`${styles.h4}`}>Hello</h4>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
            enim, dapibus sed dui eu, tempus rutrum lectus. Nunc sed finibus
            magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>
            
          </SwiperSlide>
            <SwiperSlide>

              <div className={`${styles.SliderDiv}`}>
              <img src={VenusImage} alt="slide_image" />
              <h4 className={`${styles.h4}`}>Hello</h4>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
            enim, dapibus sed dui eu, tempus rutrum lectus. Nunc sed finibus
            magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>
            
          </SwiperSlide>

            <SwiperSlide>

              <div className={`${styles.SliderDiv}`}>
              <img src={EarthImage} alt="slide_image" />
              <h4 className={`${styles.h4}`}>Hello</h4>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
            enim, dapibus sed dui eu, tempus rutrum lectus. Nunc sed finibus
            magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>
            
          </SwiperSlide>

            <SwiperSlide>

              <div className={`${styles.SliderDiv}`}>
              <img src={MarsImage} alt="slide_image" />
              <h4 className={`${styles.h4}`}>Hello</h4>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
            enim, dapibus sed dui eu, tempus rutrum lectus. Nunc sed finibus
            magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>
            
          </SwiperSlide>

            <SwiperSlide>

              <div className={`${styles.SliderDiv}`}>
              <img src={SaturnImage} alt="slide_image" />
              <h4 className={`${styles.h4}`}>Hello</h4>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
            enim, dapibus sed dui eu, tempus rutrum lectus. Nunc sed finibus
            magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>
            
          </SwiperSlide>

            <SwiperSlide>

              <div className={`${styles.SliderDiv}`}>
              <img src={JupiterImage} alt="slide_image" />
              <h4 className={`${styles.h4}`}>Hello</h4>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
            enim, dapibus sed dui eu, tempus rutrum lectus. Nunc sed finibus
            magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>
            
          </SwiperSlide>

            <SwiperSlide>

              <div className={`${styles.SliderDiv}`}>
              <img src={UranusImage} alt="slide_image" />
              <h4 className={`${styles.h4}`}>Hello</h4>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
            enim, dapibus sed dui eu, tempus rutrum lectus. Nunc sed finibus
            magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>
            
          </SwiperSlide>

            <SwiperSlide>

              <div className={`${styles.SliderDiv}`}>
              <img src={NeptuneImage} alt="slide_image" />
              <h4 className={`${styles.h4}`}>Hello</h4>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
            enim, dapibus sed dui eu, tempus rutrum lectus. Nunc sed finibus
            magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>
            
          </SwiperSlide>

      
             {/* <div className="swiper-button-prev">

            </div>
            <div className="swiper-button-next"></div> */}
            <div className="swiper-pagination"></div>
    
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;





