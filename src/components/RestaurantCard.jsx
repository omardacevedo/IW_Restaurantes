import React from 'react'

export default function RestaurantCard({ restaurant, onClick }) {
  return (
    <div
    onClick={onClick}
    className="border rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition duration-200"
    >
      <img 
      src={restaurant.imagen} 
      alt={restaurant.nombre} 
      className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-2">{restaurant.nombre}</h2>
      <p className="text-gray-600">{restaurant.descripcion}</p>
      <p className="text-sm text-gray-500">{restaurant.direccion}</p>
    </div>
  )
}
