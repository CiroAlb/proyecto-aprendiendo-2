import React, { useContext, useEffect } from 'react';
import {MyContext} from '../App';


const MainTemperatura = () => {

    const {
    temperatura,
  setTemperatura,
  sensacionTermica,
  setSensacionTermica,
  diaYHora,
  setDiaYHora,
  temperaturaMinima,
  setTemperaturaMinima,
  temperaturaMaxima,
  setTemperaturaMaxima,
  porcentajeLluvia,
  setPorcentajeLluvia,
  weatherDescription,
  setwWeatherDescription,
  selectedCityCoordinates, 
    } = useContext(MyContext);

    const apiKey = '54a2afae00970230246059b4ade50106';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityCoordinates.latitud}&lon=${selectedCityCoordinates.longitud}&appid=${apiKey}&units=metric`;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(apiUrl);
            const data = await response.json();
    
            setTemperatura(data.main.temp);
            setSensacionTermica(data.main.feels_like);
            setDiaYHora(new Date(data.dt * 1000));
            setTemperaturaMinima(data.main.temp_min);
            setTemperaturaMaxima(data.main.temp_max);
            setPorcentajeLluvia(data.porcentajeLluvia);
            setwWeatherDescription(data.weather[0].description);
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        };
    
        fetchData();
      }, [apiUrl]);
    
      return (
        <div>
          <p>Temperatura: {temperatura}°C</p>
          <p>Sensación Térmica: {sensacionTermica}°C</p>
          <p>Día y Hora: {diaYHora.toLocaleString()}</p>
          <p>Temperatura Mínima: {temperaturaMinima}°C</p>
          <p>Temperatura Máxima: {temperaturaMaxima}°C</p>
          <p>Porcentaje de Lluvia: {porcentajeLluvia}%</p>
          <p>Descripción del Clima: {weatherDescription}</p>
        </div>
      );

}

export default MainTemperatura;