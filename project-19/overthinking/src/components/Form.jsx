/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export default function Form({ handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form__input" type="text" name="thoughts" />
      <button className="form__submit" type="submit">
        Add
      </button>
    </form>
  );
}
