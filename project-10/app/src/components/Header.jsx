import { useState } from 'react';
// import svg
import bookMarkLogo from '/images/logo-bookmark.svg';
import BtnHamburger from './ButtonHamburger';
// import components
import HeaderLinks from './HeaderLinks';
import MobileMenu from './MobileMenu';
// import data
import links from '../data/links';

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <header className="header flex">
      <div className="header__logo">
        <img src={bookMarkLogo} alt="" className="header__logo-img" />
      </div>
      <nav className="header__nav flex">
        <ul className="header__ul flex">
          {links.links.map((link) => (
            <HeaderLinks
              key={link.name}
              name={link.name}
              href={link.href}
              worth={true}
            />
          ))}
        </ul>
        <button className="btn-act" type="button">
          Login
        </button>
      </nav>
      <MobileMenu handleClose={handleToggle} ariaExpanded={expanded} />
      <BtnHamburger handleClick={handleToggle} />
    </header>
  );
}
