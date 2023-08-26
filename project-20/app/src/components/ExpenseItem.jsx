/* eslint-disable react/prop-types */
import { BackspaceIcon } from '@heroicons/react/24/solid';

const ExpenseList = ({ name, cost }) => {
  return (
    <li className="flex justify-between items-center border-b-2 py-4 border-slate-200">
      <h3 className="text-lg font-bold uppercase">{name}</h3>
      <div>
        <span className="p-2 bg-red-400/70 rounded-sm mr-2">${cost}</span>
        <button>
          <BackspaceIcon className="w-4 h-4" />
        </button>
      </div>
    </li>
  );
};

export default ExpenseList;
