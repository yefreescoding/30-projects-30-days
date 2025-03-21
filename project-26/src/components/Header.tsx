import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FormInvite } from "./ui/FormInvite";

export const Header = () => {
  const links = [
    {
      id: "001",
      name: "home",
      href: "#",
    },
    {
      id: "001",
      name: "about",
      href: "#",
    },
    {
      id: "001",
      name: "contact",
      href: "#",
    },
    {
      id: "001",
      name: "blog",
      href: "#",
    },
    {
      id: "001",
      name: "careers",
      href: "#",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="section even flex justify-between items-center">
      <div className="flex-1 ">
        <img src="images/logo.svg" alt="logo" className="logo" />
      </div>
      <nav className="relative flex-2 flex items-center justify-end md:justify-between">
        <ul className="items-center hidden md:flex">
          {links.map((link) => (
            <li key={link.id} className="">
              <a
                href={link.href}
                className="p-2 capitalize hover:bg-gray-200 rounded-xl transition-all transition-150"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <motion.div>
          <motion.button
            onClick={handleClick}
            type="button"
            className={`btn request-btn ${isOpen ? "selected" : ""}`}
            style={{
              width: `${isOpen ? "166px" : "154.3px"}`,
            }}
          >
            {isOpen ? (
              <span className="flex items-center gap-2">
                Cancel Request
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                  />
                </svg>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                Request Invite
              </span>
            )}
          </motion.button>
          <AnimatePresence>{isOpen && <FormInvite />}</AnimatePresence>
        </motion.div>
      </nav>
    </header>
  );
};
