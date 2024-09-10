import { Evaluation } from "@/types/evaluation";
import React from "react";

const EvolutionButton: React.FC<{
  evolution: Evaluation;
  onClick: (name: string) => void;
}> = React.memo(({ evolution, onClick }) => (
  <div key={evolution.id} className="text-center">
    <img
      src={evolution.image}
      alt={evolution.name}
      className="w-24 h-24 object-contain mb-2"
    />
    <button
      onClick={() => onClick(evolution.name)}
      className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
      aria-label={`Evolve to ${evolution.name}`}
    >
      {evolution.name}
    </button>
  </div>
));
EvolutionButton.displayName = "EvolutionButton";

export default EvolutionButton;