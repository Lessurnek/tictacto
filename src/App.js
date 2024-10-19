import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Game from './Game';

function App() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [players, setPlayers] = useState({ player1: '', player2: '' });
  const [previousGames, setPreviousGames] = useState([]);

  const startNewGame = (player1, player2) => {
    setPlayers({ player1, player2 });
    setIsGameActive(true);
  };

  const endGameSession = (gameData) => {
    setPreviousGames([...previousGames, gameData]);
    setIsGameActive(false);
  };

  return (
    <div className="app">
      {isGameActive ? (
        <Game players={players} endGameSession={endGameSession} />
      ) : (
        <Home previousGames={previousGames} startNewGame={startNewGame} />
      )}
    </div>
  );
}

export default App;
