import React from "react";


export default function GiftCardItem({ titulo, descripcion, precio, imagen }){

    return(
         <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs mx-auto text-center transform hover:scale-105 transition-transform duration-300">
      {imagen && (
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
      <p className="text-gray-600 mb-4">{descripcion}</p>
      <div className="text-green-600 font-bold text-lg">Desde ${precio}</div>
      <button type="button"
      className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
      >
        Comprar
      </button>
  
    </div>
    );
}