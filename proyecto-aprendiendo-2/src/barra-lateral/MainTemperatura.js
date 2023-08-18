import React, { useContext, useEffect, useState } from 'react';
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

  const [isMetric, setIsMetric] = useState(true); 
  const apiKey = '54a2afae00970230246059b4ade50106';
  const unit = isMetric ? 'metric' : 'imperial'; // Elegir unidad
  const apiUrl = ` https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityCoordinates.latitude}&lon=${selectedCityCoordinates.longitude}&appid=${apiKey}&units=${unit}`;
 

    const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          console.log(data);
          setTemperatura(data.main.temp);
          setSensacionTermica(data.main.feels_like);
          setDiaYHora(new Date(data.dt * 1000));
          setTemperaturaMinima(data.main.temp_min);
          setTemperaturaMaxima(data.main.temp_max);
          setPorcentajeLluvia(data.rain);
          setwWeatherDescription(data.weather[0].main);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
    
      useEffect(() => {
        fetchData(); // Ejecutar la función fetchData al montar el componente
    
        const interval = setInterval(() => {
          fetchData(); // Ejecutar la función fetchData cada minuto
        }, 60000); // 60000 milisegundos = 1 minuto
    
        return () => {
          clearInterval(interval); // Limpiar el intervalo al desmontar el componente
        };
      }, [apiUrl]);

      const toggleUnits = () => {
        setIsMetric(!isMetric);
      };
    
      return (
        <div>
          <p>Temperatura: {temperatura}{isMetric ? '°C' : '°F'}</p>
          <p>Sensación Térmica: {sensacionTermica}{isMetric ? '°C' : '°F'}</p>
          <p>{diaYHora.toLocaleString()}</p>
          <p>Min: {temperaturaMinima}{isMetric ? '°C' : '°F'}</p>
          <p>Max: {temperaturaMaxima}{isMetric ? '°C' : '°F'}</p>
          <p>Porcentaje de Lluvia: {porcentajeLluvia}%</p> {/*No sirve*/}
          <p>Descripción del Clima: {weatherDescription}</p>{/*No sirve*/}
          <button onClick={toggleUnits}>
        Toggle Units ({isMetric ? 'Metrico' : 'Imperial'})
      </button>
        </div>
      );

}

export default MainTemperatura;