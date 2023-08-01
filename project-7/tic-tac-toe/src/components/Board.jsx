/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

// import components
import ButtonXo from './ButtonXo.jsx';

// import functions
import calculateWinnerBoard from '../../functions.js';

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinnerBoard(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinnerBoard(squares);
  let status;

  if (winner) {
    status = `The winner is: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <>
      <div className="board__game_status">{status}</div>
      <div className="board">
        <ButtonXo value={squares[0]} onSquareClick={() => handleClick(0)} />
        <ButtonXo value={squares[1]} onSquareClick={() => handleClick(1)} />
        <ButtonXo value={squares[2]} onSquareClick={() => handleClick(2)} />
        <ButtonXo value={squares[3]} onSquareClick={() => handleClick(3)} />
        <ButtonXo value={squares[4]} onSquareClick={() => handleClick(4)} />
        <ButtonXo value={squares[5]} onSquareClick={() => handleClick(5)} />
        <ButtonXo value={squares[6]} onSquareClick={() => handleClick(6)} />
        <ButtonXo value={squares[7]} onSquareClick={() => handleClick(7)} />
        <ButtonXo value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
