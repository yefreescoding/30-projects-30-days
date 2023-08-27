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

    event.target.expense.value = '';
    event.target.cost.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col">
      <div className="mb-6 flex gap-4">
        <label
          htmlFor="expense"
          className="block text-lg font-bold text-gray-80 basis-1/2 flex-grow"
        >
          Name
          <input
            type="text"
            id="expense"
            name="expense"
            className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg   focus:outline-1 focus:outline-offset-3 w-full p-2.5 placeholder:text-gray-600"
            placeholder="Groceries, Bills, Sweats..."
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
        </label>
        <label
          htmlFor="cost"
          className="block text-lg font-bold text-gray-80 basis-1/4 flex-grow"
        >
          Cost
          <input
            type="number"
            id="cost"
            name="cost"
            className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg   focus:outline-1 focus:outline-offset-3 w-full p-2.5 placeholder:text-gray-600"
            onChange={(event) => {
              setCost(event.target.value);
            }}
            required
          />
        </label>
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
