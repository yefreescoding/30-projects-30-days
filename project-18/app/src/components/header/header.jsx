// Component imports
import ShoppingCart from '../shoppingCart/ShoppingCart';

// images import
const logo = '/icons/logo.svg/';

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

function Header() {
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
      <ShoppingCart />
      <div className="header__avatar">
        <img src="" alt="" />
      </div>
    </header>
  );
}

export default Header;
