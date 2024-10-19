import React, { useState } from 'react';
import './App.css'
function Home({ previousGames, startNewGame }) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  
  const handleStartGame = () => {
    if(!player1){
      alert('Enter Player 1 Name!');
    }else if(!player2){
      alert('Enter Player 2 Name!');
    }else{
      startNewGame(player1, player2);
    }
  };

  return (
    <div className='divStyle' align="center">
      <h1 className='h1'> Welcome to Tic-Tac-Toe </h1>
      <h2 className='h2'>Previous Games</h2>
      <ul>
        {previousGames.length === 0
          ? <li className='li'>No previous games available</li>
          : previousGames.map((game, index) => (
              <li className='li' key={index}>
                {game.player1} vs {game.player2} - Wins: {game.player1Wins}, {game.player2Wins}, Draws: {game.draws}
              </li>
            ))}
      </ul>
      <h2 className='h2'>Start New Game</h2>
      <input
        className="input"
        type="text"
        placeholder="Player 1 Name"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}

      />
      <input
        className="input"
        type="text"
        placeholder="Player 2 Name"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
      />
      <button className='buttonHome' onClick={handleStartGame}>Start</button>
    </div>
  );
}

export default Home;
