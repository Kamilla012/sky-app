import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import SatelliteAnimationData from './SatelliteAnimationData.json'

const RocketAnimation = () => {
  const container = useRef(null); // Utwórz ref dla kontenera

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: SatelliteAnimationData, // Użyj zaimportowanych danych animacji
    });

    return () => {
      // Opcjonalnie, zatrzymaj animację przy odmontowywaniu komponentu
      anim.destroy();
    };
  }, []);

  return <div className="container md:absolute md:left-0 md:top-[20%] w-[30%]" ref={container}></div>; // Przypisz ref do kontenera
};

export default RocketAnimation;
