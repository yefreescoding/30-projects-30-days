import { useContext } from 'react';

import CardBudget from './CardBudget';

import { AppContext } from '../context/AppContext';

export default function UserWallet() {
  const { budget, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div>
      <CardBudget name="Budget" value={budget} />
      <CardBudget name="Remaining" value={budget - totalExpenses} />
      <CardBudget name="Spent so far" value={totalExpenses} />
    </div>
  );
}
