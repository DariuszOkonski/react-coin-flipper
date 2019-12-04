import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Game from './Game';
import ErrorComponent from './Error';

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation />

        <div className="container appContainer">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/game' component={Game} />
            <Route exact path='/about' component={About} />
            <Route component={ErrorComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
