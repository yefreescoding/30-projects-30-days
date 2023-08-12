/* eslint-disable react/prop-types */
export default function QuesAnswTabs({ question, answer, handleOpen }) {
  return (
    <article>
      {' '}
      <h3 className="section_questions__h3 flex" onClick={handleOpen}>
        {question}
        <img src="/images/icon-arrow.svg" alt="" />
      </h3>
      <p>{answer}</p>
    </article>
  );
}
