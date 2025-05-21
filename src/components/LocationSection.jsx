import React from "react";
export default function LocationSection() {
  return (
   <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-6 rounded-lg shadow-2xl my-10 mt-20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-5xl font-bold mb-4">¿Dónde te encuentras?</h2>
    <p className="mb-6 text-3xl text-gray-300">
      Descubre restaurantes recomendados cerca de ti. ¡Explora tus sabores locales!
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <input
        type="text"
        placeholder="Introduce tu ubicación"
        className="w-full sm:w-1/2 px-4 py-2 rounded-lg text-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition">
        Buscar
      </button>
    </div>
  </div>
</section>

  );
}
