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
        <div className="flex flex-col h-screen">
 <div className="imagen h-1/3 flex items-center justify-center bg-black">
  <img src="https://images.ecestaticos.com/N3JjurhbDcmw18aK8fHlkyPPZBo=/4x110:2119x1302/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F566%2F166%2Fe24%2F566166e242c19971965461dca9509292.jpg" alt="Imagen" className="w-3/4 h-3/4 rounded-full border-4 border-gray-500" />
</div>
  <div className=" text-center bg-orange-600">
    <p className="text-8xl">{temperatura}{isMetric ? '°C' : '°F'}</p>
  </div>
  <div className="flex-grow mt-6 ml-4 bg-blue-600">
    <p className='text-xl'>Térmica: {sensacionTermica}{isMetric ? '°C' : '°F'}</p>
    <p className='text-xl'>{diaYHora.toLocaleString()}</p>
    <p className='text-xl'>Min: {temperaturaMinima}{isMetric ? '°C' : '°F'}</p>
    <p className='text-xl'>Max: {temperaturaMaxima}{isMetric ? '°C' : '°F'}</p>
    {/*<p>Porcentaje de Lluvia: {porcentajeLluvia}%</p> {/*No sirve*/}
    {/*<p>Descripción del Clima: {weatherDescription}</p>{/*No sirve*/}
  </div>
  <button onClick={toggleUnits} className="mt-4">
    Toggle Units ({isMetric ? 'Metrico' : 'Imperial'})
  </button>
</div>
      );

}

export default MainTemperatura;