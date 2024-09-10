import { Attack } from "@/types/attack";
import AttackList from "./AttackList";
import React from "react";

const PokemonAttacks: React.FC<{ attacks: Attack }> = React.memo(
  ({ attacks }) => (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-3">Attacks</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AttackList attacks={attacks.fast} title="Fast Attacks" />
        <AttackList attacks={attacks.special} title="Special Attacks" />
      </div>
    </div>
  )
);
PokemonAttacks.displayName = "PokemonAttacks";

export default PokemonAttacks;