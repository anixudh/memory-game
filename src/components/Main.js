import { useEffect, useState } from "react";
import { CardGird } from "./Cards/CardGrid";

export const Main = () => {
  const pokemonCount = 12;
  const [pokemons, setPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemons, setClickedPokemons] = useState([]);

  const shuffleArray = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const loadPokemons = async () => {
      setPokemons(shuffleArray(await fetchPokemons(pokemonCount)));
    };

    loadPokemons();
  }, []);

  const fetchPokemons = async (pokemonCount) => {
    const pokemons = [];

    for (let i = 1; i <= pokemonCount; i++) {
      let url = "https://pokeapi.co/api/v2/pokemon/" + i;
      let response = await fetch(url);
      let pokemon = await response.json();
      let id = pokemon.id;
      let name = pokemon.name;
      let image = pokemon.sprites.front_default;

      pokemons.push({ id, name, image });
    }

    //console.log(pokemons);
    return pokemons;
  };

  const playGame = (pokemonName) => {};

  const handleCardClick = (e) => {
    let pokemonName = e.target.parentNode.lastChild.textContent;
    playGame(pokemonName);
    shuffleArray(pokemons);
  };
  return (
    <div className="main">
      <CardGird pokemons={pokemons} handleCardClick={handleCardClick} />
    </div>
  );
};
