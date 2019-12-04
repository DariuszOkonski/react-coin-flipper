import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const FlipButton = () => {
  const { btnOnOff, flipCoin, centralStyle } = useContext(GameContext);
  return (
    <button
      disabled={btnOnOff}
      onClick={flipCoin}
      style={centralStyle}
      type="button"
      className="btn btn-secondary btn-lg btn-block mb-4"
    >{btnOnOff ? 'Flipping...' : 'Flip Me!'}</button>
  );
}

export default FlipButton;