import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import UserLogin from "../pages/UserLogin";
import SignUp from "../pages/SignUp";
import { AuthProvider } from "../../contexts/AuthContext";
import HomePage from "../pages/HomePage";
import PrivateRoute from "../helpers/PrivateRoute";
import HistoricalRoom from "../../components/pages/HistoricalRoom";
import SportRoom from "../pages/SportRoom";
import SoftwareRoom from "../pages/SoftwareRoom";
import MovieRoom from "../pages/MovieRoom";

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
          <Route path="/historical-room">
            <HistoricalRoom />
          </Route>
          <Route path="/sport-room">
            <SportRoom />
          </Route>
          <Route path="/software-room">
            <SoftwareRoom />
          </Route>
          <Route path="/movie-room">
            <MovieRoom />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
