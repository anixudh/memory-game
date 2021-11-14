export const Card = ({ pokemon, handleCardClick }) => {
  return (
    <div className="card" onClick={handleCardClick}>
      <img className="pokemon-img" src={pokemon.image} alt={pokemon.name} />
      <div className="pokemon-name">{pokemon.name}</div>
    </div>
  );
};
