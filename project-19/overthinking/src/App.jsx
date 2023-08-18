/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// React imports
import { useState } from 'react';
// component imports
import Form from './components/Form';
import Thoughts from './components/Thoughts';

function App() {
  const [text, setText] = useState('');
  const [thoughtsList, setThoughtsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(e.target.thoughts.value);
    setThoughtsList((current) => [...current, text]);
    e.target.thoughts.value = '';
  };

  return (
    <main className="main">
      <section className="main__cover">
        <h1 className="main__h1">Overthinking? What you have in mind?</h1>
      </section>
      <Form handleSubmit={handleSubmit} />
      <section className="main__thoughts">
        <h2 className="main__h2">My thoughts</h2>
        <div className="main__thoughts_container">
          <Thoughts thoughts={thoughtsList} />
        </div>
      </section>
    </main>
  );
}

export default App;
