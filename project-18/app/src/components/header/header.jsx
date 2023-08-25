/* eslint-disable react/prop-types */
// images import
const logo = '/icons/logo.svg/';
const avatarLogo = '/icons/image-avatar.png/';

// import styles
import styles from './header.module.css';

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
    <header className={styles.header}>
      <nav className={styles['header__nav']}>
        <a className={styles['header__logo']} href="/" aria-label="Link home">
          <img src={logo} alt="Logo of the website" />
        </a>
        <div className={styles['nav__links']}>
          {navLinks.map((link) => (
            <a
              className={styles['header__link']}
              key={link.name}
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
      <div className={styles['header__user']}>
        {children}
        <div className={styles['header__avatar']}>
          <img className="header__avatar_img" src={avatarLogo} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
