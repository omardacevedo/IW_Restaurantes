import React, {useState, useEffect} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase/firebase";
import RestaurantCard from "../components/RestaurantCard";
import LocationSection from "../components/LocationSection";
import GiftCard from "../components/GiftCard";
import Modal from "../components/Modal";
import Brands from "../components/Brands";
import { brandsData } from "../data/brands";
import Footer from "../components/footer";

export default function Home() {
  const [restauranteSeleccionado, setRestauranteSeleccionado] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerRestaurantes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "restaurantes"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log("📦 Datos Firestore:", data);
        setRestaurants(data);
      } catch (error) {
        console.error("❌ Error al obtener restaurantes:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerRestaurantes();
  }, []);

  return (
    <div className="p-4">
      <LocationSection />

      {loading ? (
        <p className="text-center text-xl font-semibold">Cargando restaurantes...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onClick={() => setRestauranteSeleccionado(restaurant)}
            />
          ))}
        </div>
      )}

      <Modal
        restaurante={restauranteSeleccionado}
        onClose={() => setRestauranteSeleccionado(null)}
      />

      <GiftCard />

      <div className="border border-gray-600 p-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Nuestras marcas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brandsData.map((brand) => (
            <Brands
              key={brand.imagen}
              brand={brand}
              onClick={() => setRestauranteSeleccionado(brand)}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}