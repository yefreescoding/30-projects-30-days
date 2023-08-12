/* eslint-disable react/prop-types */
export default function QuesAnswTabs({ question, answer, handleOpen }) {
  return (
    <div>
      {' '}
      <h3 onClick={handleOpen}>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}
