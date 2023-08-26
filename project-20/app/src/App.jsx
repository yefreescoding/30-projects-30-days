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
      <div
        className="w-full mx-auto flex flex-wrap items-start "
        aria-label="Body of the page"
      >
        <aside className="basis-1/4 flex-grow p-6 grid gap-8 bg-slate-200">
          <AddExpensesForm />
          <div className="p-4">
            <h2 className="font-bold text-lg">Your wallet</h2>
            <UserWallet />
          </div>
        </aside>
        <main
          aria-label="Body of the app"
          className="basis-1/3 flex-grow p-6 grid gap-8"
        >
          <header>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              My Budget planner
              <span className="block text-slate-400">Sat Aug 26</span>
            </h1>
          </header>
          <div>
            <h2 className="text-2xl font-extrabold">Expenses</h2>
            <ExpensesList />
          </div>
        </main>
      </div>
    </AppProvider>
  );
}
