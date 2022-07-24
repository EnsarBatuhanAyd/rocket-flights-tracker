import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Launches from "./Pages/Launches/Launches";
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/launches">
          <Launches/>
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
