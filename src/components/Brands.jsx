import React from "react";

export default function Brands(brand, onClick) {

    return (
        <div
            onClick={onClick}
            className="border rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition duration-200"
        >
            <img
                src={brand.imagen}
                alt={brand.nombre}
                className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{brand.nombre}</h2>
            <p className="text-gray-600">{brand.descripcion}</p>
            <p className="text-sm text-gray-500">{brand.direccion}</p>
        </div>
    )
}