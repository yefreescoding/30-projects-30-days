// react imports
import { useContext } from 'react';

// component imports
import CardBudget from './CardBudget';

// context imports
import { AppContext } from '../context/AppContext';

// library imports
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function UserWallet() {
  const { budget, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="flex md:flex-col justify-between my-8 gap-2">
      <CardBudget name="Budget" value={budget} color="blue" />
      <CardBudget
        name="Remaining"
        value={budget - totalExpenses}
        color="lime"
      />
      <CardBudget name="Spent" value={totalExpenses} color="red" />
      <div className="flex items-center justify-end gap-4">
        {budget - totalExpenses < 100 && (
          <>
            <p className="text-red-600 font-bold">
              Be careful you are on the limit
            </p>
            <InformationCircleIcon className="h-6 w-6 text-red-500" />
          </>
        )}
      </div>
    </div>
  );
}
