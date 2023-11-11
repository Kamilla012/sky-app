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
      {planets.map((planet) => (
       <div key={planet._id} style={{ width: `${planet.size * 0.0001}px` }} className="planet bg-blue-500 text-white p-2 rounded-md mb-2">
            
        </div>
      ))}
    </div>
  );
};

export default PlanetsComponent;
