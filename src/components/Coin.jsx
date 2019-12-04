import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const Coin = () => {
  const { tailHead } = useContext(GameContext);

  return (
    <div className="text-center" style={{ height: '150px' }}>
      {tailHead && <img src={tailHead} style={{ maxWidth: '150px' }} alt="coin" className="rounded" />}
    </div>
  );
}

export default Coin;