/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

// library imports
import { CloudArrowUpIcon } from '@heroicons/react/24/solid';

export default function Form({ addThoughts }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newThought = e.target.thoughts.value;
    addThoughts({
      id: Date.now(),
      timeSubmitted: Date.now(),
      name: newThought,
      blur: true,
      delete: false,
    });
    e.target.thoughts.value = '';
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="thoughts">
        Today
        <div className="form__input_submit">
          <input
            className="form__input"
            type="text"
            name="thoughts"
            autoFocus
            required
            maxLength={60}
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
