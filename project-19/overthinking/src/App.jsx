/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// React imports
import { useState, useEffect } from 'react';

// component imports
import Form from './components/Form';
import Thoughts from './components/Thoughts';
import Menu from './components/Menu';

//import libraries
import { CloudIcon } from '@heroicons/react/24/solid';

function App() {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const savedThoughts = JSON.parse(localStorage.getItem('thoughts')) || [];
    setThoughtsList(savedThoughts);
  }, []);

  const addThoughts = (newThought) => {
    setThoughtsList((current) => [...current, newThought]);
  };
  const eraseThoughts = () => {
    setThoughtsList([]);
  };
  const showThoughts = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    localStorage.setItem('thoughts', JSON.stringify(thoughtsList));
  }, [thoughtsList]);

  return (
    <div className="wrapper">
      <main className="main" aria-label="Main content of the app">
        <header className="main__header">
          <div className="main__logo" aria-label="Logo of the site">
            <CloudIcon className="icons" />
          </div>
          <Menu eraseFunction={eraseThoughts} showThoughts={showThoughts} />
        </header>
        <section className="main__cover">
          <h1 className="main__h1">Overthink</h1>
        </section>
        <Form addThoughts={addThoughts} />
        <Thoughts thoughts={thoughtsList.reverse()} visible={visible} />
      </main>
    </div>
  );
}

export default App;
