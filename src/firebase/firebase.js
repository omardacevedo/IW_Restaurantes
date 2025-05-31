// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8QFbS54v1kW9qW-jPi1XyhC4llcsyKek",
  authDomain: "restaurantes-react.firebaseapp.com",
  projectId: "restaurantes-react",
  storageBucket: "restaurantes-react.firebasestorage.app",
  messagingSenderId: "1027340464469",
  appId: "1:1027340464469:web:b9029627dc6460463abfdc",
  measurementId: "G-ZMEZR98BRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);