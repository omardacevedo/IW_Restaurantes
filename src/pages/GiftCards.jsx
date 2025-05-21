import React from "react";
import GiftCardItem from "../components/GiftCardItem";
import { cardsData } from "../data/cards";



export default function GiftCards() {
  return (
    <div className="p-8 max-w-7xl mx-auto mt-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Tarjetas Regalo</h1>
      <p className="text-center mb-12 text-lg text-gray-700">
        Aquí podrás descubrir y adquirir tarjetas regalo de restaurantes.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {cardsData.map(({ id, titulo, descripcion, precio, imagen }) => (
          <GiftCardItem
            key={id}
            titulo={titulo}
            descripcion={descripcion}
            precio={precio}
            imagen={imagen}
          />
        ))}
      </div>
    </div>
  );
}
