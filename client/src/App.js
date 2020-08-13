import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Basket from './Basket';


function App() {

  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/basket" exact component={Basket} />
    </Router>
  );
}


export default App;
