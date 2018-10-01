
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Poster from "./components/Poster";
import Picture from "./components/Picture";
import char from "./char.json";

class App extends Component {

  render() {
    return (
      <div>
     
      <Picture shuffled={char}/>
      </div>
    );
  }
}

export default App;