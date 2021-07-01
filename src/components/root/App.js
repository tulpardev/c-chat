import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import UserLogin from "../pages/UserLogin";
import SignUp from "../pages/SignUp";
import { AuthProvider } from "../../contexts/AuthContext";
import HomePage from "../pages/HomePage";
import PrivateRoute from "../helpers/PrivateRoute";

function App() {
  return (
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <UserLogin />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
  );
}

export default App;
