import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Week extends Component {
    render() {
        return (
          <div></div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React22!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Day />
      </div>
    );
  }
}

export default App;
