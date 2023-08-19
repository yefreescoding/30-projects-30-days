/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

// library imports
import { PlusCircleIcon } from '@heroicons/react/24/solid';

export default function Form({ addThoughts }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newThought = e.target.thoughts.value;
    addThoughts({
      id: Date.now(),
      name: newThought,
      delete: false,
    });
    e.target.thoughts.value = '';
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="thoughts">Write in here...</label>
      <input
        className="form__input"
        type="text"
        name="thoughts"
        autoFocus
        required
        maxLength={60}
      />
      <button
        className="form__submit"
        aria-label="Enter new thought"
        type="submit"
      >
        <PlusCircleIcon className="icons medium" />
      </button>
    </form>
  );
}
