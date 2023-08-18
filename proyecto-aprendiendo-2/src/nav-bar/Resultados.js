import React, { useContext } from 'react';

// Importamos el context
import {MyContext} from '../App'; // ruta correcta??

const Resultados = () => {
  //useContext 
  const {
    inputValue,
    setInputValue,
    cities,
    setCities,
    selectedCity,
    setSelectedCity,
    selectedCityCoordinates, // Nueva variable para latitud y longitud
    setSelectedCityCoordinates
  } = useContext(MyContext);

  //input asincrono?
  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length >= 3) {
      try {
        //llamada a la api luego de tres caracteres y limite de 10 ciudades
        const response = await fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/places?namePrefix=${value}&limit=10`);
        //responde un json
        const data = await response.json();
        setCities(data.data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    } else {
      setCities([]);
    }
  };

  //click
  const handleCityClick = async (city) => {
    setSelectedCity(city);
    setInputValue(city.name);
    setCities([]);

    try {
      const response = await fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/cities/${city.id}`);
      const data = await response.json();
      setSelectedCityCoordinates({
        latitude: data.data.latitude,
        longitude: data.data.longitude,
      });
    } catch (error) {
      console.error('Error fetching city coordinates:', error);
    }
  };

  return (
    <div className="relative w-64">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buscar ciudad..."
        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
      />
      {cities.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white border rounded shadow-md">
          {cities.map((city) => (
            <div
              key={city.id}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleCityClick(city)}
            >
              {city.name}
            </div>
          ))}
        </div>
      )}
      {selectedCity && (
        <p className="mt-2">Ciudad seleccionada: {selectedCity.name}</p>
      )}
    </div>
  );
};

export default Resultados;

