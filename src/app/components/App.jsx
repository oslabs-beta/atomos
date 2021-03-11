import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import ComponentTree from './ComponentTree.jsx';
import NavBar from './NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="" component={ComponentTree} />
      </Switch>
    </Router>
  </div>
);

export default App;
