import React from 'react';
import styles from '../style';

const constellations = [
  { name: 'Aries', image: require('../images/aries.png') },
  { name: 'Cancer', image: require('../images/cancer.png') },
  { name: 'Capricorn', image: require('../images/capricorn.png') },
  { name: 'Gemini', image: require('../images/gemini.png') },
  { name: 'Leo', image: require('../images/leo.png') },
  { name: 'Libra', image: require('../images/libra.png')},
  { name: 'Sagittarius', image: require('../images/sagittarius.png')},
  { name: 'Scorpio', image: require('../images/scorpio.png')},
  { name: 'Taurus', image: require('../images/taurus.png')},

];

export const StarsInfo = () => {
  return (
    <div>
      <h2 className={`${styles.h2}`}>Constellations</h2>
      <div className="grid grid-cols-3 w-[800px]">
        {constellations.map((constellation, index) => (
          <div key={index} className='m-3 relative'>
            <img src={constellation.image} alt={constellation.name} />
            <p className='absolute left-[28%] bottom-[-2%] bg-green px-10 py-1 text-white rounded-full'>{constellation.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
