import React from 'react';
import logo from '../assets/images/logo.svg';
import './App.css';

const App = () =>
  (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Guesty React Component</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App/App.js</code> and save to reload.
      </p>
    </div>
  );

export default App;
