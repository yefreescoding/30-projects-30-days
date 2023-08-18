/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// React imports
import { useState, useEffect } from 'react';
// component imports
import Form from './components/Form';
import Thoughts from './components/Thoughts';
import Menu from './components/Menu';

function App() {
  const [thoughtsList, setThoughtsList] = useState([]);

  // Load initial data from localStorage when the component mounts
  useEffect(() => {
    const savedThoughts = JSON.parse(localStorage.getItem('thoughts')) || [];
    setThoughtsList(savedThoughts);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newThought = e.target.thoughts.value;
    setThoughtsList((current) => [...current, newThought]);
    e.target.thoughts.value = '';
  };

  const eraseThoughts = () => {
    setThoughtsList([]);
  };

  // Save data to localStorage whenever thoughtsList changes
  useEffect(() => {
    localStorage.setItem('thoughts', JSON.stringify(thoughtsList));
  }, [thoughtsList]);

  return (
    <main className="main">
      <header>
        <Menu eraseFunction={eraseThoughts} />
      </header>
      <section className="main__cover">
        <h1 className="main__h1">Overthinking? What you have in mind?</h1>
      </section>
      <Form handleSubmit={handleSubmit} />
      <Thoughts thoughts={thoughtsList} />
    </main>
  );
}

export default App;
