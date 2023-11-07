import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import SpaceAnimationData from './SpaceAnimationData'

const SpaceAnimation = () => {
  const container = useRef(null); // Utwórz ref dla kontenera

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: SpaceAnimationData, // Użyj zaimportowanych danych animacji
    });

    return () => {
      // Opcjonalnie, zatrzymaj animację przy odmontowywaniu komponentu
      anim.destroy();
    };
  }, []);

  return <div className="container w-[50%]" ref={container}> fgdhajkdjh</div>; // Przypisz ref do kontenera
};



export default SpaceAnimation;


