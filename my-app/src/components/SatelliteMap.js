import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import satelliteImage from '../images/satelliteIcon.svg';
import axios from 'axios';
import styles from '../style';

const SatelliteMap = () => {

        const [satelliteData, setSatelliteData] = useState(null);
        const [satelliteList, setSatelliteList] = useState([]);
        const [selectedSatelliteId, setSelectedSatelliteId] = useState('');
        const [simplifiedSatelliteList, setSimplifiedSatelliteList] = useState([]);
      
        useEffect(() => {
          const fetchSatelliteList = async () => {
            try {
              const response = await axios.get('https://tle.ivanstanojevic.me/api/tle');
              if (response.status === 200) {
                const satellites = response.data.member || [];
                setSatelliteList(satellites);
                const simplifiedSatellites = satellites.map(({ satelliteId, name }) => ({ satelliteId, name }));
                setSimplifiedSatelliteList(simplifiedSatellites);
              } else {
                console.error(`Error fetching satellite list: ${response.status}`);
              }
            } catch (error) {
              console.error('Error fetching satellite list:', error.message);
            }
          };
      
          fetchSatelliteList();
        }, []);




  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedSatelliteId) {
          const result = await fetch(`https://tle.ivanstanojevic.me/api/tle/${selectedSatelliteId}/propagate?{linkWithTodayDate}`);
  
          if (!result.ok) {
            throw new Error(`HTTP error! Status: ${result.status}`);
          }
  
          const json = await result.json();
          setSatelliteData(json);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchData();
  }, [selectedSatelliteId]); 

  const handleSatelliteChange = (event) => {
    setSelectedSatelliteId(event.target.value);
  };

  return (
    <div className='flex flex-col w-2/4'>
   

    {satelliteData ? (
      <MapContainer center={[satelliteData.geodetic.latitude, satelliteData.geodetic.longitude]} 
        zoom={1}
        style={{ height: '400px', width: '100%' }}
       
        >
            
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[satelliteData.geodetic.latitude, satelliteData.geodetic.longitude]} icon={L.icon({ iconUrl: satelliteImage, iconSize: [42, 42] })}>
          <Popup>
            <div>
              <img src={satelliteImage} alt="Satellite" style={{ width: '100%', maxHeight: '150px' }} />
              <p>Satellite Location</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>) : (
      <div>Loading satellite data...</div>
    )}

<label htmlFor="satelliteSelect">Select a satellite: </label>
    <select id="satelliteSelect"
        onChange={handleSatelliteChange}
        value={selectedSatelliteId}  
        className={`${styles.inputForm} w-[500px] text-center bg-gradient-to-r from-green-500 to-teal-500  text-white`}>
      <option 
      value=""
      className={`${styles.option}`}
      >Select a satellite</option>
      {simplifiedSatelliteList.map((satellite) => (
        <option
        className={`${styles.option}`}
        key={satellite.satelliteId}
        value={satellite.satelliteId}>
          {satellite.name}
        </option>
      ))}
    </select>
  </div>
  );
};

export default SatelliteMap;
