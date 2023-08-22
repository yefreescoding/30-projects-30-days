/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// Library imports
import { CloudIcon } from '@heroicons/react/24/solid';

// function imports
import calculateTimeAgo from '../functions/calculateTimeSubmitted';

const Thoughts = ({ thoughts, visible }) => {
  return (
    <section className="thoughts">
      {thoughts.length > 0 && <h2 className="thoughts__h2">My thoughts</h2>}
      <ul className="thoughts__ul" aria-label="List of thoughts">
        {thoughts.map((thought) => (
          <li key={thought.id} className="thoughts__li" data-onblur={visible}>
            <CloudIcon className="icons icon-1 icon-2" />
            <div>
              <p className="thoughts__p">{thought.name}</p>
              <p>{calculateTimeAgo(thought.timeSubmitted)} ago</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Thoughts;
