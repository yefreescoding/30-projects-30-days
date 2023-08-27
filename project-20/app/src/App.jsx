// import { BeakerIcon } from '@heroicons/react/24/solid';

// component imports
import AddExpensesForm from './components/AddExpensesForm';
import UserWallet from './components/userWallet';
import ExpensesList from './components/ExpensesList';

// context imports
import { AppProvider } from './context/AppContext';

// Date object
const date = new Date();

// const options = { year: 'numeric', month: 'short', day: 'numeric' };
const options = { month: 'short', day: 'numeric' };
const currentDate = date.toLocaleString('en-US', options);

console.log(currentDate); // Output: Aug 27, 2023

export default function App() {
  return (
    <AppProvider>
      <div
        className="flex flex-wrap items-start w-full md:w-[90em] mx-auto "
        aria-label="Body of the page"
      >
        <aside className="basis-[20em] flex-grow p-6 grid gap-8 h-full bg-slate-200 border-r border-slate-300">
          <div className="p-4">
            <h2 className="font-bold text-lg">Your wallet</h2>
            <UserWallet />
          </div>
          <AddExpensesForm />
        </aside>
        <main
          aria-label="Body of the app"
          className="basis-[40em] flex-grow p-4 lg:px-16 grid gap-8"
        >
          <header>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              My Budget planner
              <span className="block text-slate-400">{currentDate}</span>
            </h1>
          </header>
          <div>
            <h2 className="text-2xl font-extrabold mb-4">Expenses</h2>
            <ExpensesList />
          </div>
        </main>
      </div>
    </AppProvider>
  );
}
