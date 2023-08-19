/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { GrAdd } from 'react-icons/gr';

export default function Form({ handleSubmit, handleInput }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="thoughts">Write in here...</label>
      <input className="form__input" type="text" name="thoughts" autoFocus />
      <button
        className="form__submit"
        aria-label="Enter new thought"
        type="submit"
        onChange={handleInput}
      >
        <GrAdd />
      </button>
    </form>
  );
}
