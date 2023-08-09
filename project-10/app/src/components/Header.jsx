import { useState } from 'react';
import useDataFetching from '../hooks/useDataFetching';

import bookMarkLogo from '/images/logo-bookmark.svg';
import iconHamburger from '/images/icon-hamburger.svg';

export default function Header() {
  const { data, loading } = useDataFetching('src/data/links.json');
  const links = data?.links;
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
          {loading ? (
            <div>is loading...</div>
          ) : (
            links.map((link) => (
              <li key={link.name} className="header__li">
                <a href={link.href} className="header__a">
                  {link.name}
                </a>
              </li>
            ))
          )}
        </ul>
        <button
          className="header__btn-act"
          onClick={handleLoggingClick}
          type="button"
        >
          {log ? <span>Log in</span> : <span>Log out</span>}
        </button>
      </nav>
      <button type="button" className="header__btn_mobile">
        <span>mobile toggle</span>
        <img src={iconHamburger} alt="" />
      </button>
    </header>
  );
}
