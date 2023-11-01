import React, { useState, useEffect } from 'react';

function SearchEngine() {
//   const [satellites, setSatellites] = useState([]);

//   useEffect(() => {
//     // Wywołaj funkcję do pobierania danych z bazy danych tutaj
//     // Możesz użyć fetch lub axios, w zależności od sposobu komunikacji z serwerem

//     // Przykład użycia fetch:
//     fetch('/api/satellites')
//       .then((response) => response.json())
//       .then((data) => setSatellites(data))
//       .catch((error) => console.error('Błąd:', error));
//   }, []);
const [satellites, setSatellites] = useState([]);

useEffect(() => {
  // Wywołaj funkcję do pobierania danych z bazy danych tutaj
  async function fetchSatellites() {
    try {
      const response = await fetch('http://localhost:4000/satellites'); // Zakładam, że '/api/satellites' to endpoint do pobierania danych.
      if (response.ok) {
        const data = await response.json();
        setSatellites(data);
      } else {
        console.error('Błąd podczas pobierania danych:', response.statusText);
      }
    } catch (error) {
      console.error('Błąd:', error);
    }
  }

  fetchSatellites();
}, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nazwa satelity</th>
          <th>Rodzaj satelity</th>
          <th>Klasa orbity</th>
          <th>Kraj operatora/właściciela</th>
          <th>Apogeum (km)</th>
          <th>Wykonawca</th>
          <th>Num. COSPAR</th>
          <th>Kraj wykonawcy</th>
          <th>Num. UNRegistry</th>
          <th>Ekscentryczność</th>
          <th>Miejsce startu</th>
          <th>Pojazd startowy</th>
          <th>Num. NORAD</th>
          <th>Oficjalna nazwa satelity</th>
          <th>Operator/właściciel</th>
          <th>Perigeum (km)</th>
          <th>Cel</th>
          <th>Użytkownicy</th>
        </tr>
      </thead>
      <tbody>
        {satellites.map((satellite, index) => (
          <tr key={index}>
            <td>{satellite.name}</td>
            <td>{satellite.type}</td>
            <td>{satellite.ClassOfOrbit}</td>
            <td>{satellite.CountryOfOperatorOwner}</td>
            <td>{satellite.ApogeeKilometers}</td>
            <td>{satellite.Contractor}</td>
            <td>{satellite.COSPARNumber}</td>
            <td>{satellite.CountryOfContractor}</td>
            <td>{satellite.UNRegistry}</td>
            <td>{satellite.Eccentricity}</td>
            <td>{satellite.LaunchSite}</td>
            <td>{satellite.LaunchVehicle}</td>
            <td>{satellite.NORADNumber}</td>
            <td>{satellite.OfficialNameOfSatellite}</td>
            <td>{satellite.OperatorOwner}</td>
            <td>{satellite.PerigeeKilometers}</td>
            <td>{satellite.Purpose}</td>
            <td>{satellite.Users}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchEngine;
