import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <h1>Coin Flipper</h1>
      </BrowserRouter>
    </>
  );
}

export default App;
