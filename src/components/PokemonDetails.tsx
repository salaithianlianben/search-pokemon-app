import { Pokemon } from "@/types/pokemon";
import React from "react";

const PokemonDetails: React.FC<{ pokemon: Pokemon }> = React.memo(
  ({ pokemon }) => (
    <div>
      <h3 className="text-xl font-semibold mb-2">Details</h3>
      <p>
        Weight: {pokemon.weight.minimum} - {pokemon.weight.maximum}
      </p>
      <p>
        Height: {pokemon.height.minimum} - {pokemon.height.maximum}
      </p>
      <p>Max CP: {pokemon.maxCP}</p>
      <p>Max HP: {pokemon.maxHP}</p>
      <p>Flee Rate: {pokemon.fleeRate}</p>
    </div>
  )
);
PokemonDetails.displayName = "PokemonDetails";

export default PokemonDetails;
