import React from 'react';
import './App.css';
import GameContainer from './containers/game-container.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Crossword Puzzle</h2>
      </header>
      <div>
        <GameContainer />
      </div>
    </div>
  );
}

export default App;
