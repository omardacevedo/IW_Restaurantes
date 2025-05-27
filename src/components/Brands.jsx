import React from "react";

export default function Brands({brand, onClick}) {

    return (

        <div
            onClick={onClick}
            className="w-full h-40 cursor-pointer overflow-hidden rounded"
            
        >  
            <img
                src={brand.imagen}
                alt="Imagen brand"
                className="w-full h-full object-cover" />
        </div>
    )
}