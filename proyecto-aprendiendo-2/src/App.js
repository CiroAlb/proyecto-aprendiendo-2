import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import Resultados from './nav-bar/Resultados';
import MainTemperatura from './barra-lateral/MainTemperatura';

// Creo el contexto
export const MyContext = createContext();

function App() {
  //Armo las variables
  const [inputValue, setInputValue] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('Buenos Aires'); // Valor predeterminado
  const [selectedCityCoordinates, setSelectedCityCoordinates] = useState({
    latitude: -34.599722222,
    longitude: -58.381944444,
  });
  const [temperatura,setTemperatura] = useState('');
  const [sensacionTermica,setSensacionTermica] = useState('');
  const [diaYHora,setDiaYHora] = useState('');
  const [temperaturaMinima,setTemperaturaMinima] = useState('');
  const [temperaturaMaxima,setTemperaturaMaxima] = useState('');
  const [porcentajeLluvia,setPorcentajeLluvia] = useState('');
  const [weatherDescription,setwWatherDescription] = useState('');
  const [uv,setUv] = useState('');
  const [viento,setViento] = useState('');
  const [amanecer,setAmanecer] = useState('');
  const [atardecer,setAtardecer] = useState('');
  const [visibilidad,setVisibilidad] = useState('');
  const [humedad,setHumedad] = useState('');
  const [temperaturaManana,setTemperaturaManana] = useState('');
  const [temperaturaMediodia,setTemperaturaMediodia] = useState('');
  const [temperaturaTarde,setTemperaturaTarde] = useState('');
  const [temperaturaNoche,setTemperaturaNoche] = useState('');

//Meto todo en un objeto 
  const contextCityValues = {
    inputValue,
    setInputValue,
    cities,
    setCities,
    selectedCity,
    setSelectedCity,
    selectedCityCoordinates,
    setSelectedCityCoordinates,
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
    setwWatherDescription,
    uv,
    setUv,
    viento,
    setViento,
    amanecer,
    setAmanecer,
    atardecer,
    setAtardecer,
    visibilidad,
    setVisibilidad,
    humedad,
    setHumedad,
    temperaturaManana,
    setTemperaturaManana,
    temperaturaMediodia,
    setTemperaturaMediodia,
    temperaturaTarde,
    setTemperaturaTarde,
    temperaturaNoche,
    setTemperaturaNoche,
  };


  return (
    //Armo el provider
    <MyContext.Provider value={contextCityValues}>
      <div className="App flex justify-center items-center min-h-screen ">
        <div className="">
          <Resultados />
          <MainTemperatura/>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
