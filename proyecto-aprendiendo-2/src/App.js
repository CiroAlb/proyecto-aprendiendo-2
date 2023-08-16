import React, { createContext, useState } from 'react';
import './App.css';
import Resultados from './nav-bar/Resultados';

// Creamos el contexto
const MyContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('Buenos Aires'); // Valor predeterminado
  const [selectedCityCoordinates, setSelectedCityCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  const contextValues = {
    inputValue,
    setInputValue,
    cities,
    setCities,
    selectedCity,
    setSelectedCity,
    selectedCityCoordinates,
    setSelectedCityCoordinates,
  };

  return (
    <MyContext.Provider value={contextValues}>
      <div className="App flex justify-center items-center min-h-screen ">
        <div className="">
          <Resultados />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
