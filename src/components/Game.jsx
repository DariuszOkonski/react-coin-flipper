import React, { useState } from 'react';
import headImg from '../img/head.png';
import tailImg from '../img/tail.png';
import loading from '../img/loading.gif';

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
    <div>
      <div className="card" style={centralStyle}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-primary text-light text-center">Flips: {flips}</li>
          <li className="list-group-item bg-primary text-light text-center">Heads: {heads}</li>
          <li className="list-group-item bg-primary text-light text-center">Tails: {tails}</li>
        </ul>
      </div>

      <div className="text-center" style={{ height: '200px' }}>
        {tailHead && <img src={tailHead} style={{ maxWidth: '200px' }} alt="picture" className="rounded" />}
      </div>

      <button
        disabled={btnOnOff}
        onClick={flipCoin}
        style={centralStyle}
        type="button"
        className="btn btn-secondary btn-lg btn-block"
      >Flip Me!</button>
    </div>
  );
}

export default Game;