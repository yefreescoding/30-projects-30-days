import { useState } from 'react';
// import svg
import bookMarkLogo from '/images/logo-bookmark.svg';
import BtnHamburger from './ButtonHamburger';
// import components
import HeaderLinks from './HeaderLinks';
// import data
import links from '../data/links';

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
          {links.links.map((link) => (
            <HeaderLinks
              key={link.name}
              name={link.name}
              href={link.href}
              worth={true}
            />
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
