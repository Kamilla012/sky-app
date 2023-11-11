import React from 'react';
import styles from '../style';
import { Link } from 'react-router-dom';

const constellations = [
  { name: 'Aries', image: require('../images/aries.png') },
  { name: 'Cancer', image: require('../images/cancer.png') },
  { name: 'Capricorn', image: require('../images/capricorn.png') },
  { name: 'Gemini', image: require('../images/gemini.png') },
  { name: 'Leo', image: require('../images/leo.png') },
  { name: 'Libra', image: require('../images/libra.png') },
  { name: 'Sagittarius', image: require('../images/sagittarius.png') },
  { name: 'Scorpio', image: require('../images/scorpio.png') },
  { name: 'Taurus', image: require('../images/taurus.png') },
];

export const StarsInfo = () => {
  return (
    <div className='bg-secondary w-[100%] lg:w-[55%] py-5'>
      <h2 className={`${styles.h2}`}>Constellations</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-[75%] max-w-4xl mx-auto">
        {constellations.map((constellation, index) => (
          <div key={index} className='m-3 relative'>
            <img src={constellation.image} alt={constellation.name} />
            <Link to={"/starsCharts"} className='absolute sm:left-[30%] xl:left-[18%] bottom-[-2%] bg-green px-10 py-1 text-white rounded-full'>
              {constellation.name}
            </Link>
          </div>
        ))}
      </div>

      {/* Centered Link component below the grid */}
      <div className="flex justify-center mt-4">
        <Link to={"/starsCharts"} className={`${styles.buttonForm} w-[400px] text-center my-5`}>
          Check it
        </Link>
      </div>
    </div>
  );
};
