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
