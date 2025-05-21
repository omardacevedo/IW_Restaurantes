import React from "react";
import { Link } from "react-router-dom";

export default function GiftCard() {
  return (
    <section className="bg-gradient-to-r from-rose-500 to-pink-300 text-white py-16 px-6 rounded-lg shadow-lg my-10 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Descubre las nuevas <br />
        Tarjetas regalo
      </h2>
      <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto">
        de <strong>6.000 restaurantes</strong> en un solo regalo.
      </p>
      <Link
        to="/tarjetas-regalo"
        className="bg-white text-rose-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-rose-100 transition inline-block"
      >
        COMPRAR AHORA
      </Link>
    </section>
  );
}
