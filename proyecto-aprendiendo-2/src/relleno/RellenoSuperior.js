import React from "react";

const RellenoSuperior = () => {
  const imgUrl = [
    'https://static.vecteezy.com/system/resources/previews/006/644/884/non_2x/blue-cloudy-sky-landscape-background-free-vector.jpg',
    'https://media.istockphoto.com/id/1314812112/es/vector/cielo-al-atardecer-amanecer-de-verano-de-dibujos-animados-con-nubes-rosadas-y-sol-panorama.jpg?s=170667a&w=0&k=20&c=ihiyWvrD9BAiw_Bu1BOOtnAQ9PNOOL_5ufsqWqT9s6c=',
    'https://img.freepik.com/vector-gratis/ilustracion-noche-verano-degradado-vista-playa_23-2149431145.jpg'
  ];

  return (
    <div className="flex justify-between p-10">
      {imgUrl.map((url, index) => (
        <div
        key={index}
        className="flex-shrink-0 w-1/4 bg-cover bg-center rounded border border-gray-300"
        style={{ backgroundImage: `url(${url})`, height: '200px' }}
      ><p>Prueba</p></div>
      ))}
    </div>
  );
};

export default RellenoSuperior;
