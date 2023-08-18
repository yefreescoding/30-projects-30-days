/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { BsFillChatLeftQuoteFill } from 'react-icons/bs';

const Thoughts = ({ thoughts }) => {
  return (
    <section className="main__thoughts">
      <h2 className="main__h2">My thoughts</h2>
      <ul className="thoughts__ul">
        {thoughts.map((thought, index) => (
          <li key={index} className="thoughts__li">
            <BsFillChatLeftQuoteFill />
            <p className="thoughts__p">{thought}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Thoughts;
