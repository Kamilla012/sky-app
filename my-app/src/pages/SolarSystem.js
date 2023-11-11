import React, { useState, useEffect } from 'react';

const PlanetsComponent = () => {
  const [planets, setPlanets] = useState([]);

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
      <h1>Planets List</h1>
      <div className='flex items-center justify-center'>
      {planets.map((planet) => (
       <div key={planet._id} style={{ width: `${planet.Size / 500}px`,  height: `${planet.Size / 500}px` }}  className="m-5 rounded-full bg-blue-500 text-white p-2  mb-2">
            
        </div>
      ))}
    </div>
    </div>
  );
};

export default PlanetsComponent;
