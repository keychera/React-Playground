import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import CV from "./components/CV";
import Home from "./components/Home";
import TicTacToe from "./components/TicTacToe";

const Routes = () => {
  return (
    <Switch>
      <Route path="/cv">
        <CV />
      </Route>
      <Route path="/tictactoe">
        <TicTacToe />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes
