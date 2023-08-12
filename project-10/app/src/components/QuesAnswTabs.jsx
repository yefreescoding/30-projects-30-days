/* eslint-disable react/prop-types */
import { useState } from 'react';
import 'animate.css';

export default function QuesAnswTabs({ question, answer }) {
  const [openTab, setOpenTab] = useState(false);

  function handleOpen() {
    setOpenTab(!openTab);
  }
  return (
    <article className="section_questions__article">
      {' '}
      <h3
        className="section_questions__h3 flex"
        aria-selected={openTab ? 'true' : 'false'}
      >
        {question}
        <button type="button" onClick={handleOpen}>
          <img
            data-open={openTab ? 'true' : 'false'}
            src="/images/icon-arrow.svg"
            alt=""
          />
        </button>
      </h3>
      <p
        // className={
        //   openTab
        //     ? 'animate__animated animate__fadeInDown'
        //     : 'animate__animated '
        // }
        data-open={openTab ? 'true' : 'false'}
      >
        {answer}
      </p>
    </article>
  );
}
