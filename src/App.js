import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "./page";
import Register from "./page/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} exact />
        <Route path="/register" element={<Register />} exact />
      </Switch>
    </Router>
  );
}

export default App;
