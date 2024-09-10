import { Evaluation } from "@/types/evaluation";
import React from "react";
import EvolutionButton from "./EvolutionButton";

const PokemonEvolutions: React.FC<{
  evolutions: Evaluation[];
  onEvolutionClick: (name: string) => void;
}> = React.memo(({ evolutions, onEvolutionClick }) => (
  <div>
    <h3 className="text-2xl font-semibold mb-3">Evolutions</h3>
    <div className="flex flex-wrap gap-4">
      {evolutions.map((evolution) => (
        <EvolutionButton
          key={evolution.id}
          evolution={evolution}
          onClick={onEvolutionClick}
        />
      ))}
    </div>
  </div>
));
PokemonEvolutions.displayName = "PokemonEvolutions";

export default PokemonEvolutions