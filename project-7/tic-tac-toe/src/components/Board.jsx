/* eslint-disable react/react-in-jsx-scope */
import ButtonXo from './ButtonXo.jsx';

import { useState } from 'react';

export default function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i]) {
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

  return (
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
  );
}
