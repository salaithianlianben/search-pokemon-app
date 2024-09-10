import { Pokemon } from "@/types/pokemon";
import React from "react";

const PokemonInfo: React.FC<{ pokemon: Pokemon }> = React.memo(
  ({ pokemon }) => (
    <div className="flex flex-col md:flex-row items-center mb-6">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-48 h-48 object-contain mb-4 md:mb-0 md:mr-6"
      />
      <div>
        <h2 className="text-3xl font-bold mb-2">{pokemon.name}</h2>
        <p className="text-xl mb-1">Number: {pokemon.number}</p>
        <p className="text-lg mb-1">Classification: {pokemon.classification}</p>
        <p className="mb-1">Types: {pokemon.types.join(", ")}</p>
      </div>
    </div>
  )
);
PokemonInfo.displayName = "PokemonInfo";

export default PokemonInfo;
