/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

// library imports
import { CloudArrowUpIcon } from '@heroicons/react/24/solid';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
  const [textThought, setTextThought] = useState('');
  const { dispatch } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newThought = {
      id: uuidv4(),
      timeSubmitted: Date.now(),
      name: textThought,
      blur: true,
      delete: false,
    };

    dispatch({
      type: 'ADD_THOUGHT',
      payload: newThought,
    });

    setTextThought('');
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="thoughts">
        Today
        <div className="form__input_submit">
          <input
            className="form__input"
            type="text"
            name="thought"
            autoFocus
            required
            maxLength={60}
            value={textThought}
            onChange={(e) => setTextThought(e.target.value)}
            placeholder="What's on your mind"
          />
          <button
            className="form__submit"
            aria-label="Enter new thought"
            type="submit"
          >
            <CloudArrowUpIcon className="icons large" />
          </button>
        </div>
      </label>
    </form>
  );
}
