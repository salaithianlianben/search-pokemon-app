import React, { useMemo } from 'react';
import { Pokemon } from '@/types/pokemon';
import PokemonEvolutions from './PokemonEvaluations';
import PokemonAttacks from './PokemonAttacks';
import PokemonStrengthsWeaknesses from './PokemonStrengthsWeaknesses';
import PokemonDetails from './PokemonDetails';
import PokemonInfo from './PokemonInfo';

interface PokemonResultProps {
  pokemon: Pokemon;
  onEvolutionClick: (name: string) => void;
}


const PokemonResult: React.FC<PokemonResultProps> = ({ pokemon, onEvolutionClick }) => {
  const memoizedPokemon = useMemo(() => pokemon, [pokemon]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
      <PokemonInfo pokemon={memoizedPokemon} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <PokemonDetails pokemon={memoizedPokemon} />
        <PokemonStrengthsWeaknesses pokemon={memoizedPokemon} />
      </div>

      <PokemonAttacks attacks={memoizedPokemon.attacks} />

      {memoizedPokemon.evolutions && memoizedPokemon.evolutions.length > 0 && (
        <PokemonEvolutions evolutions={memoizedPokemon.evolutions} onEvolutionClick={onEvolutionClick} />
      )}
    </div>
  );
};

PokemonResult.displayName = 'PokemonResult';

export default React.memo(PokemonResult);