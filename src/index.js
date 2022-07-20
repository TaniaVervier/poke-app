import React from "react";
import ReactDOM from 'react-dom/client';
import Map from "./components/Leaflet/Map";
import './styles/index.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Map />
    </React.StrictMode>
    
);