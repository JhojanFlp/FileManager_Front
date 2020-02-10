import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Gestor from './components/gestor/Gestor';
// json-server db.json --port 4000

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Gestor} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
