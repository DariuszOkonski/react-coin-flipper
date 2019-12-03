import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
