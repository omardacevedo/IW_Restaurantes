import React, {useState} from "react";
import { restaurantsData } from "../data/restaurants";
import RestaurantCard from "../components/RestaurantCard";
import LocationSection from "../components/LocationSection";
import GiftCard from "../components/GiftCard";
import Modal from "../components/Modal";
import Brands from "../components/Brands";
import { brandsData } from "../data/brands";

export default function Home(){
  const [restauranteSeleccionado, setRestauranteSeleccionado]= useState(null);
    
  
  return(
    <div className="p-4">
      
      <LocationSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {restaurantsData.map(restaurant => (
          <RestaurantCard 
          key={restaurant.id} 
          restaurant={restaurant} 
          onClick={()=> setRestauranteSeleccionado(restaurant)}
          />
        ))}
      </div>

      {/*Modal mostrar restaurantes */}
      <Modal
      restaurante={restauranteSeleccionado}
      onClose={()=> setRestauranteSeleccionado(null)}
      />
      <GiftCard/>

  <div className="border border-gray-600 p-4">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center ">Nuestras marcas </h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        
        {brandsData.map(brand => (
          <Brands key={brand.imagen} brand={brand}/>
        ))}
      </div>
    </div>
    </div>
    )

}