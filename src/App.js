import React from 'react';
// import { Counter } from './features/counter/Counter';
import PublicRoute from './routing/publicRoute';
import HomePage from './pages/HomePage';
import { BrowserRouter, Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicRoute component={HomePage} path='/' exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
