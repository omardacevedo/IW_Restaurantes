//Subir archivos 
// // UploadBrands.js
// import React from "react";
// import { db } from "../firebase/firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { brandsData } from "../data/brands";

// export default function UploadBrands() {
//   const uploadToFirestore = async () => {
//     const ref = collection(db, "brands"); // Nombre de la colección

//     for (const brand of brandsData) {
//       try {
//         await addDoc(ref, brand);
//         console.log("Subido:", brand);
//       } catch (error) {
//         console.error("Error al subir:", brand, error);
//       }
//     }

//     alert("¡Todos los datos se han subido!");
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Subir marcas a Firebase</h2>
//       <button
//         onClick={uploadToFirestore}
//         className="bg-green-600 text-white px-4 py-2 rounded"
//       >
//         Subir marcas
//       </button>
//     </div>
//   );
// }
