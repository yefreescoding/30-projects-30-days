// React imports
// import { useState } from 'react';

// component imports
import Form from "./components/Form";
import Thoughts from "./components/Thoughts";
import Menu from "./components/Menu";

//import libraries
import { CloudIcon } from "@heroicons/react/24/solid";
import { AppProvider } from "./context/AppContext";

function App() {
  // useEffect(() => {
  //   const savedThoughts = JSON.parse(localStorage.getItem('thoughts')) || [];
  //   setThoughtsList(savedThoughts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('thoughts', JSON.stringify(thoughtsList));
  // }, [thoughtsList]);

  return (
    <AppProvider>
      <div className="wrapper">
        <main className="main" aria-label="Main content of the app">
          <header className="main__header">
            <div className="main__logo" aria-label="Logo of the site">
              <CloudIcon className="icons" />
            </div>
            <Menu />
          </header>
          <section className="main__cover">
            <h1 className="main__h1">Overthink</h1>
          </section>
          <Form />
          <Thoughts />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
