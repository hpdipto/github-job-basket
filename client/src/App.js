import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';


function App() {

  return (
    <Router>
      <Route exact path="/" component={Home} />
      {/*<Route exact path="/basket" component={<Basket />} />*/}
    </Router>
  );
}


export default App;
