import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const Map = () => {
  const latitude = 50.842382;
  const longitude = 16.292378;
  const [pokes, setPokes] = useState([]);

  const pokemonsActifs = () => {
    let pokemons = [
      { name: "aspicot", icon: "aspicot.png" },
      { name: "bellsprout", icon: "bellsprout.png" },
      { name: "bulbasaur", icon: "bulbasaur.png" },
      { name: "dratini", icon: "dratini.png" },
      { name: "evoli", icon: "evoli.png" },
    ];

    let pokemonList = [];
    let nbrOfPokemons = 10;

    for (let i = 0; i < nbrOfPokemons; i++) {
      let x = Math.floor(Math.random() * pokemons.length);
      pokemonList.push(pokemons[x]);
    }
    setPokes(pokemonList);
  };

  useEffect(() => pokemonsActifs(), []);
  console.log(pokes);

  let dresseurIcon = L.icon({
    iconUrl: "../../dresseurs/dresseuse.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -76],
  });

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={dresseurIcon}>
        <Popup>Hello!</Popup>
      </Marker>

      {pokes.map((poke, index) => {
        let pokeIcon = L.icon({
          iconUrl: `../../pokemons/${poke.icon}`,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [-3, -76],
        });
        let newLatitude = latitude + (Math.random() - 0.5) * 0.1;
        let newLongitude = longitude + (Math.random() - 0.5) * 0.1;

        return (
          <div key={index}>
            <Marker
              position={[newLatitude, newLongitude]}
              icon={pokeIcon}
            >

                <Popup>{poke.name}</Popup>
            </Marker>
          </div>
        );
      })}
    </MapContainer>
  );
};

export default Map;
