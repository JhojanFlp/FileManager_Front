import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Gestor from './components/gestor/Gestor';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Gestor} />
      </Switch>
    </Router>
  );
}

export default App;
