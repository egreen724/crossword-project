import React from 'react';
import './App.css';
import Gameboard from './components/gameboard.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Crossword Puzzle</h2>
      </header>
      <body>
        <p>Clues and Game Placeholder</p>
        <Gameboard/>
      </body>
    </div>
  );
}

export default App;
