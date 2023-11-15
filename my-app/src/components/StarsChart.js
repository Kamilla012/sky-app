import React, { useState, useEffect } from "react";
import styles from "../style";

const StarsChart = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState('');
  const constellationName = ['ori', 'and', 'ant', 'apu', 'cen', 'cep', 'car', 'dra', 'hyd', 'leo', 'lib', 'oct', 'vel'];

  const fetchData = async (planet) => {
    try {
      const response = await fetch("https://api.astronomyapi.com/api/v2/studio/star-chart", {
        method: "POST",
        headers: {
          Authorization:
            "Basic ODgzYmE5YzItNjMxNS00MDk4LThkMzEtZjZmZDMzOTM0ZTcyOjczOGMzNTNhOGM3Y2U0OTRjMTcyYmRmNzRmZDBlMTFiYTdiMjNjNmQ5YjY5NzMxZTlmMWY5OTU3MGRlNGNlZmQyMzkyZTgwMjk5ODU1NGVkYTMxYTBmOWVkMGQyM2YyN2YzZWEyMThhMmQ3ZmFkMTBhMGNlYWYyNzhkYzVkNWQwZjVkOTllNzcxODQ0NGQ3M2ViNzU4ZTU5YWJlNDNiMzA3MmZlNmJmMmVhODM4NmQ1OTI0YWI5Y2E1ZWVjYTVhMDA2MWJlNDg3Y2U0N2I0ZWFlMzZlYmJkN2Y1MWYxY2M1",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          style: "default",
          observer: { latitude: 33.775867, longitude: -84.39733, date: "2023-11-06" },
          view: { type: "constellation", parameters: { constellation: constellationName[constellationName.indexOf(planet)] } },
        }),
      });
      const data = await response.json();
      setImageUrl(data.data.imageUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(selectedPlanet);
  }, [selectedPlanet]);

  // Obsługa zmiany wybranej planety
  const handlePlanetChange = (event) => {
    setSelectedPlanet(event.target.value);
  };

  if (!imageUrl) {
    return <div className="text-white text-[30px] m-10">Loading...</div>;
  }

  return (
    <div className="bg-primary m-10 flex justify-center">
      {/* Render the image */}
      <div className="">
        <img className="w-[80%]" src={imageUrl} alt="Star Chart" />
      </div>

      <div>
        <select className={`${styles.inputForm} w-[500px] text-center bg-gradient-to-r from-green-500 to-teal-500  text-white`} value={selectedPlanet} onChange={handlePlanetChange}>
          {constellationName.map((constellation, index) => (
            <option key={index} className={`${styles.option}`} value={constellation}>
              {constellation.charAt(0).toUpperCase() + constellation.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StarsChart;
