/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// import { useState } from 'react';

export default function App({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   setValue('x');
  //   // console.log('clicked');
  // }

  return (
    <button className="btn_tic-tac" onClick={onSquareClick}>
      {value}
    </button>
  );
}
