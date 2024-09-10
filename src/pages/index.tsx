import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import SearchInput from '../components/SearchInput';
import PokemonResult from '../components/PokemonResult';
import { GET_POKEMON } from '@/lib/queries';
import { Pokemon } from '@/types/pokemon';

export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const { name } = router.query;
    if (typeof name === 'string') {
      setSearchTerm(name);
    }
  }, [router.query]);

  const { loading, error, data } = useQuery<{ pokemon: Pokemon }>(GET_POKEMON, {
    variables: { name: searchTerm.toLowerCase() },
    skip: !searchTerm,
  });

  const handleSearch = (term: string) => {
    if (term.trim()) {
      router.push({ pathname: '/', query: { name: term } }, undefined, { shallow: true });
    }
  };

  const handleEvolutionClick = (name: string) => {
    handleSearch(name);
  };

  const renderContent = () => {
    if (loading) return <p className="text-center mt-4">Loading...</p>;
    if (error) return <p className="text-center mt-4 text-red-500">Error: {error.message}</p>;
    if (data?.pokemon) {
      return <PokemonResult pokemon={data.pokemon} onEvolutionClick={handleEvolutionClick} />;
    }
    if (searchTerm) {
      return <p className="text-center mt-4">{`No Pokémon found with the name "${searchTerm}"`}</p>;
    }
    return null;
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Pokémon Search</h1>
      <SearchInput onSearch={handleSearch} initialValue={searchTerm} />
      {renderContent()}
    </div>
  );
}