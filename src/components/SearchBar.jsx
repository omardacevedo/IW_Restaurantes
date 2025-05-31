import React from "react";

export default function SearchBar({value, onChange, placeholder, onSearch}){
    return(
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input 
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full sm:w-1/2 px-4 py-2 rounded-lg text-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {onSearch && (
                <button
                onClick={onSearch}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition"
                >
                    Buscar
                </button>
            )}
        </div>
    );
}