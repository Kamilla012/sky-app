import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import RocketAnimationData from './RocketAnimationData.json'; // Importuj dane animacji

const RocketAnimation = () => {
  const container = useRef(null); // Utwórz ref dla kontenera

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: RocketAnimationData, // Użyj zaimportowanych danych animacji
    });

    return () => {
      // Opcjonalnie, zatrzymaj animację przy odmontowywaniu komponentu
      anim.destroy();
    };
  }, []);

  return <div className="container" ref={container}></div>; // Przypisz ref do kontenera
};

export default RocketAnimation;
