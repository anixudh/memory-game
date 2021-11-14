import pokemonLogo from "../assets/pokemon-logo.png";
import memoryGameLogo from "../assets/memory-game-logo.png";
export const Header = () => {
  return (
    <div className="header">
      <img className="pokemon-logo" src={pokemonLogo} alt="pokemon-logo" />
      <img
        className="memory-game-logo"
        src={memoryGameLogo}
        alt="memory-game-logo"
      />
    </div>
  );
};
