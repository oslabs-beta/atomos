import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ComponentTree from './components/ComponentTree.jsx';
import NavBar from './components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Atoms from './components/Atoms.jsx';
import Selectors from './components/Selectors.jsx';

const App = () => (
  <div>
    <Router>
      <NavBar />
      <Switch>
        {/* <Route path="/atoms" component={Atoms} />
        <Route path="/selectors" component={Selectors} /> */}
        <Route exact path="" component={ComponentTree} />
      </Switch>
    </Router>
  </div>
);

export default App;
