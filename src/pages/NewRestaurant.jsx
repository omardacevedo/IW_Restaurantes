import { useState } from "react";
import { restaurantsData } from "../data/restaurants";

export default function NewRestaurant(){
    const [form, setForm]= useState({
        nombre: '',
        descripcion: '',
        direccion: '',
        imagen: ''
    })

      const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

    const handleSubmit = (e) => {
    e.preventDefault()
    alert('Formulario enviado!')
    console.log(form)
  }

  return (
    <div className="p-4 max-w-lg mx-auto mt-40 border-1 rounded shadow-2xl">
      <h1 className="text-2xl font-bold mb-4 flex justify-center">Nuevo Restaurante</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="nombre" onChange={handleChange} value={form.nombre} required placeholder="Nombre" className="w-full border px-3 py-2 rounded" />
        <input name="descripcion" onChange={handleChange} value={form.descripcion} required placeholder="Descripción" className="w-full border px-3 py-2 rounded" />
        <input name="direccion" onChange={handleChange} value={form.direccion} required placeholder="Dirección" className="w-full border px-3 py-2 rounded" />
        <input name="imagen" onChange={handleChange} value={form.imagen} required placeholder="URL de Imagen" className="w-full border px-3 py-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 block justify-center">Agregar</button>
      </form>
    </div>
  )

}