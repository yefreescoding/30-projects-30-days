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

  useEffect(() => {
    const savedThoughts = JSON.parse(localStorage.getItem('thoughts')) || [];
    setThoughtsList(savedThoughts);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newThought = e.target.thoughts.value;
    if (newThought !== '') {
      setThoughtsList((current) => [...current, newThought]);
      e.target.thoughts.value = '';
    }
  };

  const eraseThoughts = () => {
    setThoughtsList([]);
  };

  useEffect(() => {
    localStorage.setItem('thoughts', JSON.stringify(thoughtsList));
  }, [thoughtsList]);

  return (
    <div className="wrapper">
      <main className="main">
        <header className="main__header">
          <CloudIcon className="icons" />
          <Menu eraseFunction={eraseThoughts} />
        </header>
        <section className="main__cover">
          <h1 className="main__h1">Overthinking? What you have in mind?</h1>
        </section>
        <Form handleSubmit={handleSubmit} />
        <Thoughts thoughts={thoughtsList} />
      </main>
    </div>
  );
}

export default App;
