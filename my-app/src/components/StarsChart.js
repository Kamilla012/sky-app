import React, { useState, useEffect } from "react";
import styles from "../style";

const StarsChart = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const fetchData = async () => {
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
          view: { type: "constellation", parameters: { constellation: "ori" } },
        }),
      });
      const data = await response.json();
      setImageUrl(data.data.imageUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once on mount

  const [selectedPlanet, setSelectedPlanet] = useState('');

  // Obsługa zmiany wybranej planety
  const handlePlanetChange = (event) => {
    setSelectedPlanet(event.target.value);
  };

  if (!imageUrl) {
    return <div className="text-white text-[30px] m-10">Loading...</div>;
  }

  return (
    <div className="m-10 flex justify-center gap-[10%]">
      {/* Render the image */}
      <div className="">
    
      <img  src={imageUrl} alt="Star Chart" />
    </div>
    {/* Andromeda 
    Antila
    Apus
    Centaurus
    Cepheus
    Carter
    Draco
    Hydrus
    Leo
    Libra
    Octans
    Vela */}
    <div>
    <select className={`${styles.inputForm} w-[500px] text-center bg-gradient-to-r from-green-500 to-teal-500  text-white`} value={selectedPlanet} onChange={handlePlanetChange}>
        <option className={`${styles.option}`} value="Orion">Orion</option>
        <option className={`${styles.option}`} value="Andromeda">Andromeda</option>
        <option className={`${styles.option}`} value="Antila">Antila</option>
        <option className={`${styles.option}`} value="Apus">Apus</option>
        <option className={`${styles.option}`} value="Centaurus">Centaurus</option>
        <option className={`${styles.option}`} value="Cepheus">Cepheus</option>
        <option className={`${styles.option}`} value="Carter">Carter</option>
        <option className={`${styles.option}`} value="Draco">Draco</option>
        <option className={`${styles.option}`} value="Hydrus">Hydrus</option>
        <option className={`${styles.option}`} value="Leo">Leo</option>
        <option className={`${styles.option}`} value="Libra">Libra</option>
        <option className={`${styles.option}`} value="Octans">Octans</option>
        <option className={`${styles.option}`}value="Vela">Vela</option>
      </select>
      {/* {selectedPlanet && <p>Wybrana planeta: {selectedPlanet}</p>} */}
    </div>

    </div>
    
  );
};


export default StarsChart;
