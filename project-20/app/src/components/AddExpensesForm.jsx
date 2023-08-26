// library imports
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { useContext, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { AppContext } from '../context/AppContext';

export default function AddExpensesForm() {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="expense"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="expense"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Groceries, Bills, Sweats..."
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="cost"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Cost
        </label>
        <input
          type="number"
          id="cost"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(event) => {
            setCost(event.target.value);
          }}
          required
        />
      </div>
      <button
        type="submit"
        className="flex items-center gap-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <PlusCircleIcon className="w-8 h-8" />
        <span className="">Add expense</span>
      </button>
    </form>
  );
}
