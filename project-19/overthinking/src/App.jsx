// React imports
import { useState } from "react";

// component imports
import Menu from "./components/Menu";
import Form from "./components/Form";
import Thoughts from "./components/Thoughts";

//import libraries
import { CloudIcon } from "@heroicons/react/24/solid";

// context imports
import { AppProvider } from "./context/AppContext";

function App() {
  const [formIsOpen, setFormIsOPen] = useState(false);

  const handleForm = () => {
    setFormIsOPen(!formIsOpen);
  };

  return (
    <AppProvider>
      <div className="wrapper">
        <main className="main" aria-label="Main content of the app">
          <header className="main__header">
            <div className="main__logo" aria-label="Logo of the site">
              <CloudIcon className="icons medium" />
            </div>
            <nav className="main__nav">
              <small>Use the menu to add and delete your thoughts</small>
              <Menu openForm={handleForm} />
            </nav>
          </header>
          <section className="main__body">
            <h1 className="main__h1">Overthink</h1>
            {formIsOpen && <Form onClick={handleForm} />}
            <Thoughts />
          </section>
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
