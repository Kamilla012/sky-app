import React, { useState, useEffect } from 'react';
import mercury from '../images/planets/Mercury.png'
import styles from '../style';
const PlanetsComponent = () => {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const planetsImages = [
    { name: 'Mercury', image: require('../images/planets/Mercury.png') },
    { name: 'Venus', image: require('../images/planets/Venus.png') },
    { name: 'Earth', image: require('../images/planets/Earth.png') },
    { name: 'Mars', image: require('../images/planets/Mars.png') },
    { name: 'Jupiter', image: require('../images/planets/Jupiter.png') },
    { name: 'Saturn', image: require('../images/planets/Saturn.png') },
    { name: 'Uranus', image: require('../images/planets/Uranus.png') },
    { name: 'Neptune', image: require('../images/planets/Neptune.png') },
   
  ];

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('http://localhost:4000/planets');
        const data = await response.json();

        if (response.status === 404) {
          console.log('Brak danych planet.');
        } else {
          setPlanets(data);
        }
      } catch (error) {
        console.error('Wystąpił błąd podczas pobierania danych z bazy danych.', error);
      }
    };

    fetchPlanets();
  }, []); 


  const handlePlanetClick = (index) => {
    setSelectedPlanet((prevSelected) => (prevSelected === index ? null : index));
  };

  return (
    <div>
      <h1 className={`${styles.h2} mt-10`}>Solar System</h1>

      <div className='flex flex-col md:flex-row items-center justify-center mx-10'>
        {planets.map((planet, index) => (
          <div key={index} className='m-3 relative' onClick={() => handlePlanetClick(index)}>
            <img src={planetsImages[index].image} alt={planet.Planet}  />
            {/* <p className='text-white'>{planet.Planet}</p> */}

            {selectedPlanet === index && (
            <div className={`popup absolute bottom-[90%] text-white bg-secondary p-5 rounded-md`}>
              <h5 className='w-[150px] text-green text-[28px] mb-2 '>{planet.Planet}</h5>
              <p>Distance from Sun: {planet.Distance}</p>
              <p>Size: {planet.Size}</p>
              <p>Orbital Period: {planet.OrbitalPeriod}</p>
              <p>Rotation Period: {planet.RotationPeriod}</p>
              <p>Type: {planet.Type}</p>
              <p>Moons: {planet.Moons}</p>
            </div>
            
             )}
          </div>
        ))}
      </div> 
    </div>
  );
};


export default PlanetsComponent;
