import React from "react";
import Users from "./users/users";
import Navbar from "./partials/Navbar";
import UsersItem from "./users/UserItem";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="container">
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/users/:login" component={UsersItem} />
            <Route component={Users} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
