import React, { useState } from "react";
import Home from "./pages/home";
import Search from "./pages/Search";
import NewRestaurant from "./pages/NewRestaurant";
import Login from "./pages/Login";
import { restaurantsData as initialData } from "./data/restaurants";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaUtensils, FaUser } from "react-icons/fa";
import GiftCard from "./components/GiftCard"; // sección promocional
import GiftCards from "./pages/GiftCards";    // página destino
import GiftCardItem from "./components/GiftCardItem";


function App() {
  const [restaurants, setRestaurants] = useState(initialData);

  return (
    <Router>
      <nav className="fixed top-0 w-full z-50  bg-gray-500 text-white p-4 flex justify-between items-center shadow-md ">
        <div className="flex items-center gap-2 ml-3">
          <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
            <FaUtensils className="text-white w-6 h-6" />
            <span className="font-semibold text-lg">Restaurantes</span>
          </Link>
        </div>
        <div className="flex gap-4 mr-8">
          <Link to="/">Inicio</Link>
          <Link to="/buscar">Buscar</Link>
          <Link to="/nuevo">Nuevo Restaurante</Link>
          <Link
            to="/login"
            className="flex items-center gap-2 bg-white text-gray-800 px-3 py-1 rounded hover:bg-gray-200 transition"
          >
            <FaUser />
            Login
          </Link>
          <Link to="/reserva">Reservar</Link>


        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home restaurants={restaurants} />} />
        <Route path="/buscar" element={<Search restaurants={restaurants} />} />
        <Route
          path="/nuevo"
          element={
            <NewRestaurant
              setRestaurants={setRestaurants}
              restaurants={restaurants}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/tarjetas-regalo" element={<GiftCards />} />
        <Route path=""></Route>
      </Routes>
    </Router>
  );
}

export default App;
