import React, { useState, useEffect } from 'react';

function Satellites() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/satellites')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Lista Satelitów</h1>
      <table className='text-white'>
        <thead>
          <tr>
            <th>Nazwa Satelity</th>
            <th>Klasa Orbiy</th>
            <th>Kraj Właściciela</th>
            <th>Apogee (km)</th>
            <th>Kontraktor</th>
            <th>COSPAR Numer</th>
            <th>Kraj Kontraktora</th>
            <th>UN Registry</th>
            <th>Ekscentryczność</th>
            <th>Strona Startowa</th>
            <th>Pojazd Startowy</th>
            <th>NORAD Numer</th>
            <th>Oficjalna Nazwa Satelity</th>
            <th>Operator/Właściciel</th>
            <th>Perigeum (km)</th>
            <th>Cel</th>
            <th>Użytkownicy</th>
          </tr>
        </thead>
        <tbody>
          {data.map((satellite, index) => (
            <tr key={index}>
              <td>{satellite.SatelliteName}</td>
  <td>{satellite.Class}</td>
  <td>{satellite.Country}</td>
  <td>{satellite.Apogee}</td>
  <td>{satellite.Contractor}</td>
  <td>{satellite.COSPAR}</td>
  <td>{satellite.UN}</td>
  <td>{satellite.Eccentricity}</td>
  <td>{satellite.LaunchSite}</td>
  <td>{satellite.LaunchVehicle}</td>
  <td>{satellite.NORAD}</td>
  <td>{satellite.SatelliteName}</td>
  <td>{satellite.Operator}</td>
  <td>{satellite.Perigee}</td>
  <td>{satellite.Purpose}</td>
  <td>{satellite.Users}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Satellites;
