/* eslint-disable react/prop-types */
// images import
const logo = '/icons/logo.svg/';
const avatarLogo = '/icons/image-avatar.png/';

// Navigation Links
const navLinks = [
  {
    name: 'Collection',
    href: '/',
  },
  {
    name: 'Men',
    href: '/',
  },
  {
    name: 'Women',
    href: '/',
  },
  {
    name: 'About',
    href: '/',
  },
  {
    name: 'Contact',
    href: '/',
  },
];

function Header({ children }) {
  return (
    <header className="header">
      <a href="/" aria-label="Link home">
        <img src={logo} alt="Logo of the website" />
      </a>
      <nav className="header__nav">
        {navLinks.map((link) => (
          <a className="header__link" key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </nav>
      {children}
      <div className="header__avatar">
        <img className="header__avatar_img" src={avatarLogo} alt="" />
      </div>
    </header>
  );
}

export default Header;
