import React from 'react';
import './App.css';
import Gameboard from './components/gameboard.js'
import Clues from './components/clues.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Crossword Puzzle</h2>
      </header>
      <div>
        <Clues/>
        <Gameboard/>
      </div>
    </div>
  );
}

export default App;
