import React, { useState } from 'react';
import Board from './Board';
import './App.css'

function Game({ players, endGameSession }) {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [draws, setDraws] = useState(0);

  const currentPlayer = xIsNext ? players.player1 : players.player2;

  const handleClick = (index) => {
    const squaresCopy = [...squares];
    if (calculateWinner(squares) || squaresCopy[index]){
      return;
    } 
    squaresCopy[index] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);

  const handleEndRound = () => {
    if (winner) {
      if (winner === 'X') {
        setPlayer1Wins(player1Wins + 1);
      } else {
        setPlayer2Wins(player2Wins + 1);
      }
    } else {
      setDraws(draws + 1);
    }
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const handleStop = () => {
    endGameSession({
      player1: players.player1,
      player2: players.player2,
      player1Wins,
      player2Wins,
      draws,
    });
  };

  return (

    <div className='divStyle' align="center">
      <h1 className='h1'>{players.player1} vs {players.player2}</h1>
      <div className='board-container'>
        <Board squares={squares} onClick={handleClick}></Board>
      </div>
      <div style={{color : 'white', fontSize : '30px'}}>
        {winner ? `Winner: ${winner === 'X' ? players.player1 : players.player2}` : `Next player: ${currentPlayer}`}
      </div>
      <button className='buttonContinue' onClick={handleEndRound}>Continue</button>
      <button className='buttonStop' onClick={handleStop}>Stop</button>
      <div>
        <p style={{color : 'white', fontSize : '20px'}}>{players.player1} Wins: {player1Wins}</p>
        <p style={{color : 'white', fontSize : '20px'}}>{players.player2} Wins: {player2Wins}</p>
        <p style={{color : 'white', fontSize : '20px'}}>Draws: {draws}</p>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
