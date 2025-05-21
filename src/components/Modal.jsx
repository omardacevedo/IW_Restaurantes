import React from "react";


export default function Modal({restaurante, onClose}){
    if (!restaurante) return null;

    return(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative ">
        <button
        className="absolute top-2 right-2 text-gray-500 text-2xl"
        onClick={onClose}
        >
            x
        </button>
        <img 
        src={restaurante.imagen} 
        alt={restaurante.nombre}
        className="w-full h-48 object-cover rounded mb-4 mt-6"
        />
        <h2 className="text-2xl font-bold mb-2">{restaurante.nombre}</h2>
        <p className="text-gray-700 mb-2">{restaurante.descripcion}</p>
        <p className="text-sm text-gray-500 mb-4">📍 {restaurante.direccion}</p>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mx-auto block"
          onClick={onClose}
        >
          Cerrar
        </button>
        </div>
    </div>
    );
}
