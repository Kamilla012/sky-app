import React from 'react'

const StarsChart = () => {

        // Wykonaj zapytanie do zewnętrznego API za pomocą fetch
        fetch('https://api.astronomyapi.com/api/v2/studio/star-chart')
          .then(response => response.json()) // Konwertuj odpowiedź na format JSON
          .then(data => {
            // Tutaj możesz obsłużyć dane API, np. zaktualizować stan komponentu
            this.setState({ apiData: data });
          })
          .catch(error => {
            // Obsłuż błędy w przypadku problemów z zapytaniem
            console.error('Błąd podczas pobierania danych z API:', error);
          });
      
  return (
    <div>StarsChart</div>
  )
}

export default StarsChart