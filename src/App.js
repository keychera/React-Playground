import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import Routes from "./Routes";
import './App.css';
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div className='App'>
      <Helmet>
        <title>playground</title>
      </Helmet>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}
