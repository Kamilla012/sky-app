import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import satelliteImage from '../images/satelliteIcon.svg'




const SatelliteMap = () => {
    const [satelliteData, setSatelliteData] = useState(null);
    const today = new Date();

 
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  

    const linkWithTodayDate = `/propagate?date=${formattedDate}T${today
      .toLocaleTimeString('en-US', { hour12: false })
      .replace(/:/g, '%3A')}%2B00:00`;


      const [tleData, setTleData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tle.ivanstanojevic.me/api/tle');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTleData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('https://tle.ivanstanojevic.me/api/tle/44859/propagate?{linkWithTodayDate}');

                if (!result.ok) {
                    throw new Error(`HTTP error! Status: ${result.status}`);
                }

                const json = await result.json();
                setSatelliteData(json);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Render map with satellite marker when data is available
    if (satelliteData) {
        const { geodetic } = satelliteData;
        const position = [geodetic.latitude, geodetic.longitude];
        const satelliteIcon = new L.Icon({
            iconUrl: satelliteImage,
            iconSize: [42, 42], // Dostosuj rozmiar ikony według potrzeb
            iconAnchor: [16, 16],
            popupAnchor: [0, -8],
        });

        return (
            <MapContainer
                center={position}
                zoom={1}  // Adjust zoom level as needed
                style={{ height: '400px', width: '50%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}  icon={satelliteIcon}>
                <Popup>
                        <div>
                            <img src={satelliteImage} alt="Satellite" style={{ maxWidth: '100%', maxHeight: '150px' }} />
                            <p>Satellite Location</p>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        );
    }

   
    return <div>Loading...</div>;
};

export default SatelliteMap;
