import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation />

        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <h2>Home</h2>} />
            <Route exact path='/game' render={() => <h2>Game</h2>} />
            <Route exact path='/about' render={() => <h2>About</h2>} />
            <Route render={() => <h2>Error</h2>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
