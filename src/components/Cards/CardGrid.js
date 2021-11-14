import { Card } from "./Card";
export const CardGird = ({ pokemons, handleCardClick }) => {
  const cardGrid = pokemons.map((pokemon) => {
    return (
      <Card
        key={pokemon.id}
        pokemon={pokemon}
        handleCardClick={handleCardClick}
      />
    );
  });
  //console.log(cardGrid);
  return <div className="card-grid">{cardGrid}</div>;
};
