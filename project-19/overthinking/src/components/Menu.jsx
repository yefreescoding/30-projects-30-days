/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// component imports
import { useState } from 'react';

// library imports
import { TrashIcon } from '@heroicons/react/24/solid';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { MoonIcon } from '@heroicons/react/24/solid';

function Menu({ eraseFunction }) {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="menu">
      <button onClick={handleOpen} aria-label="Open the menu">
        {!openMenu ? (
          <Bars3Icon className="icons" />
        ) : (
          <XMarkIcon className="icons" />
        )}
      </button>
      <div className={`menu__actions ${openMenu && 'open'}`}>
        <button aria-label="Dark mode toggle" className="menu__btn">
          <span>Dark mode</span>
          <MoonIcon className="icons small" />
        </button>
        <button
          onClick={eraseFunction}
          aria-label="Erase my thoughts"
          className="menu__btn"
        >
          <span>Delete my thoughts</span>
          <TrashIcon className="icons small" />
        </button>
      </div>
    </div>
  );
}

export default Menu;
