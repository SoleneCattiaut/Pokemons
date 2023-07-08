import React from "react";
import ReactDOM from "react-dom/client";
import CardPokemon from "../component/CardPokemon";
import "../index.css";
import Pikachu from "../component/Pikachu";


function Pokemons() {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <Pikachu />
      <CardPokemon />
    </React.StrictMode>
  );
  return (<React.StrictMode>
    <Pikachu />
    <CardPokemon />
  </React.StrictMode>);
}

export default Pokemons;
