import React, { useState, useEffect } from 'react';
import mercury from '../images/planets/Mercury.png'
import styles from '../style';
const PlanetsComponent = () => {
  const [planets, setPlanets] = useState([]);
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

  return (
    <div>
      <h1 className={`${styles.h2} mt-10`}>Solar System</h1>

      <div className='flex items-center justify-center'>
        {planets.map((planet, index) => (
          <div key={index} className='m-3 relative'>
            <img src={planetsImages[index].image} alt={planet.Planet}  />
            <p className='text-white'>{planet.Planet}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default PlanetsComponent;
