import React from 'react';

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board({ squares, onClick }) {
  return (
    <div>
      <div className="board-row">
        {squares.slice(0, 3).map((square, index) => (
          <Square key={index} value={square} onClick={() => onClick(index)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(3, 6).map((square, index) => (
          <Square key={index + 3} value={square} onClick={() => onClick(index + 3)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(6, 9).map((square, index) => (
          <Square key={index + 6} value={square} onClick={() => onClick(index + 6)} />
        ))}
      </div>
    </div>
  );
}

export default Board;
