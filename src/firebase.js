// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYNyhGcSXN35eShVz9e-pgsKAn_m07FrU",
  authDomain: "restaurant-directory-39724.firebaseapp.com",
  projectId: "restaurant-directory-39724",
  storageBucket: "restaurant-directory-39724.firebasestorage.app",
  messagingSenderId: "110513627925",
  appId: "1:110513627925:web:f57ffd1bab3db6fa75bf1c",
  measurementId: "G-HTS0QH65Y5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);