import React from 'react';
import Home from './components/Home';
import { Redirect, Switch, Route, } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Redirect to='/' />
    </Switch>
  );
}

export default App;