import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-20jeyT5J4Ro0YnAlmimzO13Dh0JBDLI",
  authDomain: "cart-20cb2.firebaseapp.com",
  projectId: "cart-20cb2",
  storageBucket: "cart-20cb2.appspot.com",
  messagingSenderId: "345713707108",
  appId: "1:345713707108:web:5ba61950922b388266f771"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

