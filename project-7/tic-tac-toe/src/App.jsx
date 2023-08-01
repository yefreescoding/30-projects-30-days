/* eslint-disable react/react-in-jsx-scope */
// import Components
import Carcasa from './components/Carcasa.jsx';
import Board from './components/Board.jsx';
// import styles
import './App.css';

export default function App() {
  return (
    <div className="wrapper">
      <Carcasa>
        <Board />
      </Carcasa>
    </div>
  );
}
