import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../App';

const MainTemperatura = () => {
  const {
    selectedCityCoordinates,
  } = useContext(MyContext);

  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '54a2afae00970230246059b4ade50106';
  const unit = 'metric'
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityCoordinates.latitude}&lon=${selectedCityCoordinates.longitude}&appid=${apiKey}&units=${unit}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const getRandomColor = () => {
    const colors = [
      'bg-red-300',
      'bg-blue-300',
      'bg-green-300',
      'bg-yellow-300',
      'bg-purple-300',
      'bg-pink-300',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="h-full w-full bg-red-600 ">
      {weatherData && (
        <>
          <div className="flex justify-evenly ">
            <div className='rounded w-1/4 h-1/2 bg-slate-200'>
              <p >Viento: {weatherData.wind.speed}</p>
            </div>
            <div className='rounded w-1/4 h-1/2 bg-slate-200'>
              <p >Humedad: {weatherData.main.humidity}%</p>
            </div>
            <div className='rounded w-1/4 h-1/2 bg-slate-200'>
              <p >Visibilidad: {weatherData.visibility}</p>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className='rounded w-1/4 h-1/2 bg-slate-200'>
              <p >Presión: {weatherData.main.pressure}</p>
            </div>
            <div className='rounded w-1/4 h-1/2 bg-slate-200'>
              <p >Nubes: {weatherData.clouds.all}%</p>
            </div>
            <div className='rounded w-1/4 h-1/2 bg-slate-200'>
              <p className=''>Icono: <img src={getWeatherIconUrl(weatherData.weather[0].icon)} alt="Icono clima" /></p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainTemperatura;