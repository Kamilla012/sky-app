import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StarsChart() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      hostname: 'api.astronomyapi.com',
      path: '/api/v2/studio/star-chart',
      headers: {
        Authorization: 'Basic ODgzYmE5YzItNjMxNS00MDk8LThkMzEtZjZmZDMzOTM0ZTcyOjczOGMzNTNhOGM3Y2U0OTRjMTcyYmRmNzRmZDBlMTFiYTdiMjNjNmQ5YjY5NzMxZTlmMWY5OTU3MGRlNGNlZmQyMzkyZTgwMjk5ODU1NGVkYTMxYTBmOWVkMGQyM2FjMmVhODM4NmQ1OTI0YWI5Y2E1ZWVjYTVhMDA2MWJlNDg3Y2U0N2I0ZWFlMzZlYmJkN2Y1MWYxY2M1'
      }
    };

    const requestBody = {
      style: 'default',
      observer: {
        latitude: 33.775867,
        longitude: -84.39733,
        date: '2023-11-05',
      },
      view: {
        type: 'constellation',
        parameters: {
          constellation: 'ori',
        },
      },
    };

    axios
      .request(requestOptions, JSON.stringify(requestBody))
      .then((response) => {
        if (response.data && response.data.imageUrl) {
          setImageUrl(response.data.imageUrl);
        } else {
          console.log('Nieprawidłowa odpowiedź API');
        }
      })
      .catch((error) => {
        console.error('Błąd zapytania HTTP: ', error);
      });
  }, []);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Wykres gwiazd" />}
    </div>
  );
}

export default StarsChart;
