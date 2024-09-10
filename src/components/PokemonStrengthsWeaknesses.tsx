import { Pokemon } from "@/types/pokemon";
import React from "react";

const PokemonStrengthsWeaknesses: React.FC<{ pokemon: Pokemon }> = React.memo(
  ({ pokemon }) => (
    <div>
      <h3 className="text-xl font-semibold mb-2">Strengths & Weaknesses</h3>
      <p>Resistances: {pokemon.resistant.join(", ")}</p>
      <p>Weaknesses: {pokemon.weaknesses.join(", ")}</p>
    </div>
  )
);
PokemonStrengthsWeaknesses.displayName = "PokemonStrengthsWeaknesses";

export default PokemonStrengthsWeaknesses;
