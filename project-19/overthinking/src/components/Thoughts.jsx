// Library imports
import { CloudIcon } from "@heroicons/react/24/solid";

// function imports
import calculateTimeAgo from "../functions/calculateTimeSubmitted";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Thoughts = () => {
  const { thoughts } = useContext(AppContext);

  console.log(thoughts);

  return (
    <section className="thoughts">
      {thoughts.length > 0 && <h2 className="thoughts__h2">My thoughts</h2>}
      <ul className="thoughts__ul" aria-label="List of thoughts">
        {thoughts
          .sort((a, b) => b.timeSubmitted - a.timeSubmitted)
          .map((thought) => (
            <li
              key={thought.id}
              className="thoughts__li"
              data-onblur={thought.blur}
            >
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
