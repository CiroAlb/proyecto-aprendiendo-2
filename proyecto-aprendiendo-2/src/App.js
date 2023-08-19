import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import Resultados from './nav-bar/Resultados';
import MainTemperatura from './barra-lateral/MainTemperatura';
import RellenoSuperior from './relleno/RellenoSuperior';
import RellenoInferior from './relleno/RellenoInferior';


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
  const [viento,setViento] = useState('');
  const [visibilidad,setVisibilidad] = useState('');
  const [humedad,setHumedad] = useState('');
  const [presion, setPresion] = useState('');
  const [nubes, setNubes] = useState('');
  const [icono,setIcono] = useState('');

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
    viento,
    setViento,
    visibilidad,
    setVisibilidad,
    humedad,
    setHumedad,
    presion, 
    setPresion,
    nubes, 
    setNubes,
    icono,
    setIcono,
  };


  return (
    <MyContext.Provider value={contextCityValues}>
      <div className="App flex h-screen">
        <div className="w-1/4 bg-orange-300 ">
          {/* Componente MainTemperatura */}
          <MainTemperatura />
        </div>
        <div className="w-3/4">
          {/* Componente Resultados */}
          <header className="bg-blue-200 ">
            <Resultados className="w-1/2 bg-black" />
          </header>
          <RellenoSuperior className='h-1/2 bg-slate-500' />
          <RellenoInferior className='h-1/2 bg-blue-400' />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
