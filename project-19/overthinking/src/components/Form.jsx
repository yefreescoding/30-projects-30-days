/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export default function Form({ handleSubmit, handleInput }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form__input" type="text" name="thoughts" autoFocus />
      <button className="form__submit" type="submit" onChange={handleInput}>
        Add
      </button>
    </form>
  );
}
