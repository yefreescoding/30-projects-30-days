/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// react imports
import { useState, useContext } from "react";

// library imports
import { TrashIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";

// functions imports
import { handleDarkMode } from "../functions/themeTransitions";

import { AppContext } from "../context/AppContext";

function Menu({ openForm }) {
  const { dispatch } = useContext(AppContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [hide, setHide] = useState(true);

  const showThoughts = () => {
    dispatch({
      type: "VIEW_THOUGHTS",
      payload: PaymentResponse.id,
    });

    setOpenMenu(!openMenu);
    setHide(!hide);
  };
  const eraseThoughts = () => {
    dispatch({
      type: "DELETE_THOUGHTS",
    });
  };

  return (
    <div className="menu">
      <button onClick={() => setOpenMenu(!openMenu)} aria-label="Open the menu">
        {!openMenu ? (
          <Bars3Icon className="icons" />
        ) : (
          <XMarkIcon className="icons" />
        )}
      </button>
      <div className={`menu__actions ${openMenu && "open"}`}>
        <button
          onClick={openForm}
          aria-label="Add new though"
          className="menu__btn"
        >
          <span>Add new thought</span>
          <CloudArrowUpIcon className="icons small" />
        </button>
        <button
          onClick={showThoughts}
          aria-label="Show all thoughts"
          className="menu__btn"
        >
          {hide ? <span>Show my thoughts</span> : <span>Hide my thoughts</span>}
          <EyeIcon className="icons small" />
        </button>
        <button
          onClick={eraseThoughts}
          aria-label="Erase my thoughts"
          className="menu__btn"
        >
          <span>Delete my thoughts</span>
          <TrashIcon className="icons small" />
        </button>
        <button
          onClick={handleDarkMode}
          aria-label="Dark mode toggle"
          className="menu__btn"
        >
          <span>Dark mode</span>
          <MoonIcon className="icons small" />
        </button>
      </div>
    </div>
  );
}

export default Menu;
