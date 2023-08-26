/* eslint-disable react/prop-types */
import { BackspaceIcon } from '@heroicons/react/24/solid';

const ExpenseList = ({ name, cost }) => {
  return (
    <li>
      <h3>{name}</h3>
      <div>
        <span>${cost}</span>
        <button>
          <BackspaceIcon className="w-4 h-4" />
        </button>
      </div>
    </li>
  );
};

export default ExpenseList;
