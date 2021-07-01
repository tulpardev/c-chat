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

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <UserLogin />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
