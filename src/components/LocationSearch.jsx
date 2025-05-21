import React from "react"

export default function Search({onSearch}){

    const filtered = restaurantsData.filter(r =>
        r.nombre.toLowerCase().includes(query.toLowerCase())
    )

    return(
         <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Buscar Restaurantes</h1>
      <input
        type="text"
        className="border px-3 py-2 w-full mb-4 rounded mt-4"
        placeholder="Buscar por nombre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(r => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
        {filtered.length === 0 && <p>No se encontraron resultados.</p>}
      </div>
    </div>
    )
}