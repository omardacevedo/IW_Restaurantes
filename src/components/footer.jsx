import React from "react";

export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm">
                    &copy;{new Date().getFullYear()} Restaurants. Todos los derechos reservados.
                </p>
                <div className="mt-2">
                    <a href="/privacy" className="text-gray-400 hoover:text-white mx-2">Politica de privacidad</a>
                    <a href="/terms" className="text-gray-400 hoover:text-white mx-2">Términos y condiciones</a>
                </div>

            </div>

        </footer>
    );
}