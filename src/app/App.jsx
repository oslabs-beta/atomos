import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComponentTree from "./components/ComponentTree.jsx";
import NavBar from "./components/NavBar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Atoms from "./components/Atoms.jsx";
import Selectors from "./components/Selectors.jsx";
const port = chrome.runtime.connect({ name: "Atomos" });

const App = () => {
  // const [tree, setTree] = useState();
  // // Rece ived fiber node state changes from reactFileParser
  // useEffect(() => {
  //   // establish a connection between devtools and background page
  //   port.postMessage({
  //     name: "connect",
  //     tabId: chrome.devtools.inspectedWindow.tabId,
  //   });
  //   // console.log('tab ID from App.jsx', chrome.devtools.inspectedWindow.tabId);
  //   console.log("hitting line 20 in app.jsx for port");
  //   //saving data to ReactfileParser
  //   port.onMessage.addListener((message) => {
  //     console.log("setting tree");
  //     console.log("Message tree in APP.jsx line 24:", message);
  //     setTree(message);
  //   });
  // }, []);
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/atoms" component={Atoms} />
          <Route path="/selectors" component={Selectors} />
          <Route exact path="" component={ComponentTree} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
