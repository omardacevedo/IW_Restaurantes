import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

export default function NewRestaurant(){
    const [form, setForm]= useState({
        nombre: '',
        descripcion: '',
        direccion: '',
        imagen: ''
    });

    const navigate = useNavigate();



      const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

    const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await addDoc(collection(db, "restaurantes"), form);
      alert("Restaurante guardado correctamente");
      navigate("/") //redirige al Home para ver el restaurante agregado

    }catch(error){
      console.error(" X Error al guardar el restaurante",error);
      alert("Error al guardar el restaurante")

    }
  };

  return (
    <div>

    <div className="p-6 max-w-xl mx-auto mt-40 bg-white border border-gray-200 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Nuevo Restaurante</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input 
        name="nombre" 
        onChange={handleChange} 
        value={form.nombre} 
        required placeholder="Nombre del restaurante" 
        className="w-full px-4 border border-gray-300 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <input 
        name="descripcion" 
        onChange={handleChange} 
        value={form.descripcion} 
        required placeholder="Descripción" 
        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
        name="direccion" 
        onChange={handleChange} 
        value={form.direccion} 
        required placeholder="Dirección" 
          className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
        name="imagen" 
        onChange={handleChange} 
        value={form.imagen} 
        required placeholder="URL de Imagen" 
        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform shadow-md">
          Guardar Restaurante
        </button>
      </form>      
    </div>
    <Footer/>
    </div>


  )

}