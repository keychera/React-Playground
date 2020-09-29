import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import Routes from "./Routes";
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}
