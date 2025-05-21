import React, {useState} from "react";
import { restaurantsData } from "../data/restaurants";
import RestaurantCard from "../components/RestaurantCard";
import LocationSection from "../components/LocationSection";
import GiftCard from "../components/GiftCard";
import Modal from "../components/Modal";

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
    </div>
    )

}