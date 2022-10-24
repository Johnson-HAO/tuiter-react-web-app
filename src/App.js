/*import logo from './logo.svg';*/
import React from 'react'


import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <Routes>
                <Route index
                       element={<Labs/>}/>
                <Route path="/hello"
                       element={<HelloWorld/>}/>
                <Route path="/tuiter/*"
                       element={<Tuiter/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );


  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to Web Development Fall 2022
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
