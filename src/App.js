import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom'
import Footer from "./component/Footer";
import NavbarHome from "./component/Navbar/NavbarHome";
import Home from "./page";
import Register from "./page/Register";


function App() {
  return (
    <Router>
      <NavbarHome />
      <Switch>
        <Route path="/" element={<Home />} exact />
        <Route path="/register" element={<Register />} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
