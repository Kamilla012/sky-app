import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';
import ConstellationDetail from './ConstellationDetail'; 
import constellationsData from '../data/constellationsData';
import { Routes, Route, Link as RouterLink } from 'react-router-dom'


// const constellations = [
//   { name: 'Aries', image: require('../images/aries.png') },
//   { name: 'Cancer', image: require('../images/cancer.png') },
//   { name: 'Capricorn', image: require('../images/capricorn.png') },
//   { name: 'Gemini', image: require('../images/gemini.png') },
//   { name: 'Leo', image: require('../images/leo.png') },
//   { name: 'Libra', image: require('../images/libra.png') },
//   { name: 'Sagittarius', image: require('../images/sagittarius.png') },
//   { name: 'Scorpio', image: require('../images/scorpio.png') },
 
// ];

const StarsInfo = () => {
  return (
    <div className='bg-secondary py-5'>
      <h2 className={`${styles.h2}`}>Constellations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[75%] max-w-4xl mx-auto">
        {constellationsData.map((constellation, index) => (
          <div key={index} className='m-3 relative shadow-lg shadow-green '>
            <img src={constellation.image} alt={constellation.name} className='rounded-xl'/>
            {/* Zaktualizowany Link */}
            <RouterLink to={`/constellations/${constellation.name}`} className='absolute left-[35%] w-[80px] sm:left-[30%] xl:left-[30%] bottom-[-5%] bg-green p-1 text-center text-white rounded-full'>
              {constellation.name}
              
            </RouterLink>
          </div>
        ))}
      </div>

   
      <Routes>
        {/* <Route path="/" element={<ConstellationDetail />} /> */}
        <Route path="/constellations/:name" element={<ConstellationDetail />} />
      </Routes>

      {/* Centered Link component below the grid */}
      <div className="flex justify-center mt-4">
        <Link to={"/starsCharts"} className={`${styles.buttonForm} w-[400px] text-center my-5`}>
          Check it
        </Link>
      </div>
    </div>
  );
};

export default StarsInfo;


