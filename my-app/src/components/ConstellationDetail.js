import React from 'react';
import { useParams } from 'react-router-dom';
import constellationsData from '../data/constellationsData';
import styles from '../style';

const ConstellationDetail = () => {
  const { name } = useParams();
  const constellations = constellationsData;

  // Find the current constellation by name
  const currentConstellation = constellations.find(constellation => constellation.name === name);

  // Check if the current constellation is found
  if (!currentConstellation) {
    return <div>{`Constellation "${name}" not found`}</div>;
  }

  const currentIndex = constellations.indexOf(currentConstellation);

  // Get two previous and two next constellations, handling edge cases
  const previousConstellations = constellations.slice(Math.max(0, currentIndex - 2), currentIndex);
  const nextConstellations = constellations.slice(currentIndex + 1, currentIndex + 3);

  // If there are not enough previous constellations, take from the end of the list
  if (previousConstellations.length < 2) {
    const additionalPreviousConstellations = constellations.slice(-2);
    previousConstellations.unshift(...additionalPreviousConstellations);
  }

  // If there are not enough next constellations, take from the beginning of the list
  if (nextConstellations.length < 2) {
    const additionalNextConstellations = constellations.slice(0, 2 - nextConstellations.length);
    nextConstellations.push(...additionalNextConstellations);
  }

  return (
    <div className='text-white flex justify-between'>
      <div className='flex flex-col items-center '>
        
          <h2 className={`${styles.h2}`}>{` ${currentConstellation.name}`}</h2>
          <p className='w-2/4'>{currentConstellation.text}</p>
          <div className='m-10'>
            <img src={currentConstellation.image} alt={name} className='w-[70%]' />
          </div>
  
      </div>
      <div className='w-2/4'>

      <p>{currentConstellation.description}</p>

      {/* Display links to the previous constellations */}
      <div>
        {previousConstellations.map((prevConstellation, index) => (
          <p key={index}>{prevConstellation.name}</p>
        ))}
      </div>

      {/* Display links to the next constellations */}
      <div>
        {nextConstellations.map((nextConstellation, index) => (
          <p key={index}>{nextConstellation.name}</p>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ConstellationDetail;
