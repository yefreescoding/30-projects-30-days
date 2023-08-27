/* eslint-disable react/prop-types */
import { BackspaceIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseList = ({ name, cost, id }) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };

  return (
    <li className="flex justify-between items-center border-b-2 py-4 border-slate-200">
      <h3 className="text-lg font-bold uppercase">{name}</h3>
      <div>
        <span className="p-2 bg-red-400/70 rounded-sm mr-2">${cost}</span>
        <button onClick={handleDelete}>
          <BackspaceIcon className="w-4 h-4" />
        </button>
      </div>
    </li>
  );
};

export default ExpenseList;
