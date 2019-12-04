import React, { useState } from 'react';
import headImg from '../img/head.png';
import tailImg from '../img/tail.png';
import loading from '../img/loading.gif';
import { GameContext } from '../contexts/GameContext';
import Results from './Results';
import Coin from './Coin';
import FlipButton from './FlipButton';

const coin = ['head', 'tail'];

const Game = () => {
  const centralStyle = {
    width: '60%',
    minWidth: '300px',
    margin: '1rem auto',
  }

  const [tailHead, setTileHead] = useState(null);
  const [flips, setFlips] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [btnOnOff, setBtnOnOff] = useState(false);

  const flipCoin = () => {
    setTileHead(loading);
    setBtnOnOff(true);

    setTimeout(() => {
      const draw = coin[Math.floor(Math.random() * coin.length)];
      setFlips(flips + 1);
      setBtnOnOff(false);
      if (draw === 'head') {
        setHeads(heads + 1);
        setTileHead(headImg);
      } else {
        setTails(tails + 1);
        setTileHead(tailImg);
      }
    }, 3000);
  }

  return (
    <GameContext.Provider value={{ flips, heads, tails, centralStyle, tailHead, btnOnOff, flipCoin }}>
      <div>
        <Results />
        <Coin />
        <FlipButton />
      </div>
    </GameContext.Provider>
  );
}

export default Game;