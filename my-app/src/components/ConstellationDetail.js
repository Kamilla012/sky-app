import React from 'react';
import { useParams, Link } from 'react-router-dom';
import constellationsData from '../data/constellationsData';
import styles from '../style';
import skyNight from '../images/backgrounds/skyNight.svg'

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
    <div className='text-white flex flex-col lg:flex-row'>
      <div className='flex flex-col items-center '>
        <h2 className={`${styles.h2}`}>{` ${currentConstellation.name}`}</h2>
        <p className='w-4/5'>{currentConstellation.text}</p>
        <div className='m-10 flex justify-center'>
          {/* <img src={currentConstellation.image} alt={name} className='w-[80%]' /> */}
          <img src={skyNight} alt="Sky Night" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className={`${styles.h3} text-green`}>Other constellations</h3>
        {/* Display links to the previous constellations */}
        {previousConstellations.map((prevConstellation, index) => (
          <Link to={`/constellations/${prevConstellation.name}`} key={index} className={`${styles.sideBarElement}`}>
            <p className='text-[30px] mx-10'>{prevConstellation.name}</p>
            <img src={prevConstellation.imageSymbolic} alt={`${prevConstellation.name} + symbol`} />
          </Link>
        ))}

        {/* Display links to the next constellations */}
        {nextConstellations.map((nextConstellation, index) => (
          <Link to={`/constellations/${nextConstellation.name}`} key={index} className={`${styles.sideBarElement}`}>
            <p className='text-[30px] mx-10'>{nextConstellation.name}</p>
            <img src={nextConstellation.imageSymbolic} alt={`${nextConstellation.name} + symbol`} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ConstellationDetail;
