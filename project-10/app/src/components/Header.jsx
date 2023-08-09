import { useState } from 'react';
// import useDataFetching from '../hooks/useDataFetching';

import bookMarkLogo from '/images/logo-bookmark.svg';
// import HeaderLinks from './HeaderLinks';
import links from '../data/links';
import BtnHamburger from './ButtonHamburger';
console.log(links);

export default function Header() {
  const [log, isLog] = useState(true);
  const handleLoggingClick = () => {
    isLog(!log);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={bookMarkLogo} alt="" className="header__logo-img" />
      </div>
      <nav className="header__nav">
        <ul className="header__ul">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <button
          className="header__btn-act"
          onClick={handleLoggingClick}
          type="button"
        >
          {log ? (
            <span className="header__btn-in">Log in</span>
          ) : (
            <span className="header__btn-out">Log out</span>
          )}
        </button>
      </nav>
      <BtnHamburger />
    </header>
  );
}
