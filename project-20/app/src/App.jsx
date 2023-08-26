// import { BeakerIcon } from '@heroicons/react/24/solid';

// component imports
import AddExpensesForm from './components/AddExpensesForm';
import UserWallet from './components/userWallet';
import ExpensesList from './components/ExpensesList';

// context imports
import { AppProvider } from './context/AppContext';

export default function App() {
  return (
    <AppProvider>
      <div className="" aria-label="Body of the page">
        <main
          aria-label="Body of the app"
          className="min-w-full w-[70em] mx-auto"
        >
          <header>
            <h1>My Budget planner</h1>
            <p>Sat Aug 26</p>
          </header>
          <div>
            <ExpensesList />
          </div>
        </main>
        <aside>
          <AddExpensesForm />
          <UserWallet />
        </aside>
      </div>
    </AppProvider>
  );
}
