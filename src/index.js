import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD_n2A5Es5urz0vKUk71IVJrk1PnWwf9l4",
  authDomain: "projecto-43550.firebaseapp.com",
  projectId: "projecto-43550",
  storageBucket: "projecto-43550.appspot.com",
  messagingSenderId: "409368500838",
  appId: "1:409368500838:web:5147bf5e979f9c4e252ba7"
};
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <App />
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
