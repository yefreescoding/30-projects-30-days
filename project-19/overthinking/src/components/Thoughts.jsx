/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// Library imports
import { CloudIcon } from '@heroicons/react/24/solid';

const Thoughts = ({ thoughts }) => {
  return (
    <section className="thoughts">
      {thoughts.length > 0 && <h2 className="thoughts__h2">My thoughts</h2>}
      <ul className="thoughts__ul">
        {thoughts.map((thought) => (
          <li
            key={thought.id}
            className="thoughts__li"
            data-onblur={thought.blur}
          >
            <CloudIcon className="icons icon-1 icon-2" />
            <p className="thoughts__p">{thought.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Thoughts;
