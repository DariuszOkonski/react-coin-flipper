import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="jumbotron bg-secondary">
      <h1 className="display-4 text-white">Coin Flipper</h1>
      <p className="lead text-white">Let's flip a coin</p>
      <hr className="my-4"></hr>
      <Link className="btn btn-primary btn-sm" to="/game" role="button">Game</Link>
      <Link className="btn btn-primary btn-sm ml-1" to="/about" role="button">About</Link>
    </div>
  );
}

export default Home;