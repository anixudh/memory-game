import "./ScoreBoard.css";
export const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboard">
      <div className="current-score">Current score: {currentScore}</div>
      <div className="best-score">Best Score: {bestScore}</div>
    </div>
  );
};
