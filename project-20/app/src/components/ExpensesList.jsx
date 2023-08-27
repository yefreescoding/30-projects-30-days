// REact imports
import { useContext } from 'react';

// Component imports
import ExpenseItem from './ExpenseItem';

import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          name={expense.name}
          cost={expense.cost}
          id={expense.id}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
