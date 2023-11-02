// SatellitesSearch.js
import React, { useState } from 'react';
import styles from '../style';

function SatellitesSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [satellites, setSatellites] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    // Wyślij zapytanie do swojego API
    // const response = await fetch(`/satellites?search=${searchQuery}`);
    
    const response = await fetch('http://localhost:4000/satellites?search=' + searchQuery, {
  headers: {
    Accept: 'application/json',
  },
});
    
    const data = await response.json();

    setSatellites(data);
  }

  return (
    <div className='min-h-screen'>
        <h1 className={`${styles.h1}`}>Satellite finder</h1>
    <div className={`${styles.divForm} h-[200px] mb-10`}>
      
      <form className={`${styles.form}`} onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter name or country"
          value={searchQuery}
          onChange={handleSearchChange}
          className={`${styles.inputForm}`}
        />
        <button type="submit" className={`${styles.buttonForm}`}>Szukaj</button>
      </form>
      </div>
    <div className='flex justify-center items-center'>
      <table>
      <thead>
          <tr className={`${styles.tableTr} text-[16px]`}>
            <th className={`${styles.tableTd}`}>Satellite Name</th>
            <th className={`${styles.tableTd}`}>Orbit Class</th>
            <th className={`${styles.tableTd}`}>Country</th>
            <th className={`${styles.tableTd}`}>Apogee</th>
            <th className={`${styles.tableTd}`}>Contractor</th>
            <th className={`${styles.tableTd}`}>COSPAR</th>
         
            <th className={`${styles.tableTd}`}>UN</th>
            <th className={`${styles.tableTd}`}>Eccentricity</th>
            <th className={`${styles.tableTd}`}>Launch Site</th>
      
            <th className={`${styles.tableTd}`}>Launch Vehicle</th>
            <th className={`${styles.tableTd}`}>NORAD</th>
            <th className={`${styles.tableTd}`}>Operator</th>
            <th className={`${styles.tableTd}`}>Perigeum</th>
            <th className={`${styles.tableTd}`}>Purpose</th>
          
            <th className={`${styles.tableTd}`}>Users</th>
          </tr>
        </thead>
        {satellites.map((satellite, index) => (
             <tr className={`${styles.tableTr}`} key={index}>
                <td className={`${styles.tableTd}`}>{satellite.SatelliteName}</td>
                <td className={`${styles.tableTd}`}>{satellite.Class}</td>
                <td className={`${styles.tableTd}`}>{satellite.Country}</td>
                <td className={`${styles.tableTd}`}>{satellite.Apogee}</td>
                <td className={`${styles.tableTd}`}>{satellite.Contractor}</td>
                <td className={`${styles.tableTd}`}>{satellite.COSPAR}</td>
                <td className={`${styles.tableTd}`}>{satellite.UN}</td>
                <td className={`${styles.tableTd}`}>{satellite.Eccentricity}</td>
                <td className={`${styles.tableTd}`}>{satellite.LaunchSite}</td>
                <td className={`${styles.tableTd}`}>{satellite.LaunchVehicle}</td>
                <td className={`${styles.tableTd}`}>{satellite.NORAD}</td>
                <td className={`${styles.tableTd}`}>{satellite.Operator}</td>
                <td className={`${styles.tableTd}`}>{satellite.Perigee}</td>
                <td className={`${styles.tableTd}`}>{satellite.Purpose}</td>
                <td className={`${styles.tableTd}`}>{satellite.Users}</td>
            </tr>
        //   <li key={satellite._id}>
        //     <p>Nazwa: {satellite.SatelliteName}</p>
        //     <p>Kraj: {satellite.Country}</p>
        //     {/* Dodaj inne pola, które chcesz wyświetlić */}
        //   </li>
        ))}
      </table >
      </div>
    </div>
  );
}

export default SatellitesSearch;
