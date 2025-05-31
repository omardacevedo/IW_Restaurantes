import React, {useState} from "react";
import SearchBar from "./SearchBar";
import { restaurantsData } from "../data/restaurants";
import RestaurantCard from "./RestaurantCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function Search(){
  const [query, setQuery] =useState("");
  const filtered = restaurantsData.filter((r) =>
        r.nombre.toLowerCase().includes(query.toLowerCase())
    )

    return(
         <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Buscar Restaurantes</h1>
      <SearchBar
      value={query}
      onChange={(e) =>setQuery(e.target.value)}
      placeholder="Buscar por nombre"
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