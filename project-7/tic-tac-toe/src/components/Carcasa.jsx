/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export default function Carcasa({ children, resetGame }) {
  return (
    <main className="main" aria-label="Game boy cover">
      <div className="main__screen" aria-label="Game Boy screen">
        {children}
      </div>
      <section className="main__handler">
        <h1 className="main__h1">Tic-Tac-Toe</h1>
        <div className="main__controls">
          <div className="main__dir_key">
            <div className="main__dir_key-div">
              <button className="main__dir_key-up"> = </button>
              <button className="main__dir_key-up"> = </button>
            </div>
            <div className="main__dir_key-div">
              <button className="main__dir_key-down"> = </button>
              <button className="main__dir_key-down"> = </button>
            </div>
          </div>
          <div className="main__act_key">
            <button className="main__act_key-A">X</button>
            <button className="main__act_key-B">O</button>
          </div>
        </div>
        <div className="main__switches">
          <button onClick={resetGame} className="main__switches-btn"></button>
          <button className="main__switches-btn"></button>
        </div>
      </section>
    </main>
  );
}
