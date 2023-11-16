import React from 'react';
import PropTypes from 'prop-types';

const weatherImages = {
    '01d': 'http://openweathermap.org/img/wn/01d.png', // Cielo despejado (día)
    '01n': 'http://openweathermap.org/img/wn/01n.png', // Cielo despejado (noche)
    '02d': 'http://openweathermap.org/img/wn/02d.png', // Algunas nubes (día)
    '02n': 'http://openweathermap.org/img/wn/02n.png', // Algunas nubes (noche)
    '03d': 'http://openweathermap.org/img/wn/03d.png', // Nubes dispersas
    '03n': 'http://openweathermap.org/img/wn/03n.png',
    '04d': 'http://openweathermap.org/img/wn/04d.png', // Nubes rotas
    '04n': 'http://openweathermap.org/img/wn/04n.png',
    '09d': 'http://openweathermap.org/img/wn/09d.png', // Lluvia de ducha
    '09n': 'http://openweathermap.org/img/wn/09n.png',
    '10d': 'http://openweathermap.org/img/wn/10d.png', // Lluvia (día)
    '10n': 'http://openweathermap.org/img/wn/10n.png', // Lluvia (noche)
    '11d': 'http://openweathermap.org/img/wn/11d.png', // Tormenta
    '11n': 'http://openweathermap.org/img/wn/11n.png',
    '13d': 'http://openweathermap.org/img/wn/13d.png', // Nieve
    '13n': 'http://openweathermap.org/img/wn/13n.png',
    '50d': 'http://openweathermap.org/img/wn/50d.png', // Niebla
    '50n': 'http://openweathermap.org/img/wn/50n.png'
};


function WeatherDisplay({ city, weatherData }) {
    const weatherIconCode = weatherData.weather[0].icon;
    const weatherImageUrl = weatherImages[weatherIconCode] || 'default.png'; // Imagen por defecto si no hay coincidencia

    return (
        <div className="weather-display">
            <h2>Clima en {city}</h2>
            <img 
                src={weatherImageUrl} 
                alt={weatherData.weather[0].description} 
            />
            <p>Temperatura: {weatherData.main.temp}°C</p>
            <p>Condición: {weatherData.weather[0].main}</p>
            <p>Humedad: {weatherData.main.humidity}%</p>
            {/* Más detalles del clima */}
        </div>
    );
}

WeatherDisplay.propTypes = {
    city: PropTypes.string.isRequired,
    weatherData: PropTypes.object.isRequired
};

export default WeatherDisplay;
