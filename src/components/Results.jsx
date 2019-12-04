import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const Results = () => {
  const { flips, heads, tails, centralStyle } = useContext(GameContext);

  return (
    <div className="card" style={centralStyle}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-primary text-light text-center">Flips: {flips}</li>
        <li className="list-group-item bg-primary text-light text-center">Heads: {heads}</li>
        <li className="list-group-item bg-primary text-light text-center">Tails: {tails}</li>
      </ul>
    </div>
  );
}

export default Results;