import { useContext } from 'react';

import CardBudget from './CardBudget';

import { AppContext } from '../context/AppContext';

export default function UserWallet() {
  const { budget, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="flex flex-col justify-between my-8 gap-8 ">
      <CardBudget name="Budget" value={budget} color="blue" />
      <CardBudget
        name="Remaining"
        value={budget - totalExpenses}
        color="lime"
      />
      <CardBudget name="Spent so far" value={totalExpenses} color="red" />
    </div>
  );
}
