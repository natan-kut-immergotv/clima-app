import './App.css';
import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';


function App() {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = '46cb904144ab6a872a8f2131f136ca90';

    // Función para manejar la búsqueda de ciudades
    const handleCitySearch = (searchTerm) => {
      setCity(searchTerm);
      fetchWeatherData(searchTerm);
    };

    const fetchWeatherData = (cityName) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
      setIsLoading(true);
      setError(null);
      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Error en la API: ${response.status}`);
              }
              return response.json();
          })
          .then(data => {
            setWeatherData(data);
            setIsLoading(false);
        })
          .catch(error => {
            console.error('Error al obtener datos del clima:', error);
            setError(error.message);
            setIsLoading(false);
        });
  };

  const navLinks = [
    { title: "Inicio", href: "/" },
    { title: "Pronóstico", href: "/forecast" },
    { title: "Configuración", href: "/settings" }
  ];
  
  return (
    <div>
      <NavigationBar links={navLinks} />
      <div className='container'>
        <SearchBar onSearchSubmit={handleCitySearch}/>

        {isLoading && <p>Cargando datos del clima...</p>}

        {error && <p>Error al cargar datos: {error}</p>}

        {!isLoading && !error && weatherData && (
          <WeatherDisplay city={city} weatherData={weatherData} />
        )}

      </div>
    </div>

        );
      }

export default App;
