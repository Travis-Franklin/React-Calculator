import React from 'react';
import logo from './logo.svg';
import './App.css';
import Math from './math.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Calculator is alive
        </p>
        <Math/>
      </header>
    </div>
  );
}

export default App;

{/* <img src={logo} className="App-logo" alt="logo" /> */}

{/* <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}