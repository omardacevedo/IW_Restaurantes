import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../components/footer";

export default function Search() {
  const [query, setQuery] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar datos desde Firebase
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const snapshot = await getDocs(collection(db, "restaurantes"));
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRestaurants(data);
        setLoading(false);
      } catch (error) {
        console.error("❌ Error al obtener restaurantes:", error);
      }
    };

    fetchRestaurants();
  }, []);

  const filtered = restaurants.filter(r =>
    r.nombre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Buscar Restaurantes</h1>
      <input
        type="text"
        className="border px-3 py-2 w-full mb-4 rounded mt-4"
        placeholder="Buscar por nombre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading ? (
        <p>Cargando restaurantes...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(r => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
          {filtered.length === 0 && <p>No se encontraron resultados.</p>}
        </div>
      )}

      <Footer/>
      
    </div>
  );
}
