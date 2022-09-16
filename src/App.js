import './App.css';
import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';

function App() {
  let offset = 0;
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    loadPokemonsFromApi();
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e) => {
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
      offset += 10;
      loadPokemonsFromApi();
    }
  };

  const loadPokemonsFromApi = async () => {
    const indexRequest = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
    const indexData = await indexRequest.json();
    const newPokemons = indexData.results;

    setPokemons((oldPokemons) => [...oldPokemons, ...newPokemons]);
  }

  return (
    <div>
      <h1 className="">Pokémons:</h1>

      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}

export default App;
