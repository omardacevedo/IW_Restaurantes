import React, {useState} from "react";
import SearchBar from "./SearchBar";

export default function LocationSection() {
  const [locationQuery, setLocationQuery] = useState("");


  const handleSearch=()=>{
    console.log("Buscar ubicación: ", locationQuery)
  }
  return (
   <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-6 rounded-lg shadow-2xl my-10 mt-20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-5xl font-bold mb-4">¿Dónde te encuentras?</h2>
    <p className="mb-6 text-3xl text-gray-300">
      Descubre restaurantes recomendados cerca de ti. ¡Explora tus sabores locales!
    </p>
    <SearchBar
    value={locationQuery}
    onChange={(e) => setLocationQuery(e.target.value)}
    placeholder="Introduce tu ubicación"
    onSearch={handleSearch}
    />
  </div>
</section>

  );
}
