/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { TrashIcon } from '@heroicons/react/24/solid';

function Menu({ eraseFunction }) {
  return (
    <div>
      <button onClick={eraseFunction} aria-label="Erase my thoughts">
        <TrashIcon className="icons" />
      </button>
    </div>
  );
}

export default Menu;
