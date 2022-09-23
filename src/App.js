import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "./page";
import ForgotPassword from "./page/ForgotPassword";
import Login from "./page/Login";
import Register from "./page/Register";
import ResetPasswordForm from "./page/ResetPassword";
import VerifyPage from "./page/Verify";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} />
        <Route path="/verify-email" element={<VerifyPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/" element={<Home />} />
      </Switch>
    </Router>
  );
}

export default App;
