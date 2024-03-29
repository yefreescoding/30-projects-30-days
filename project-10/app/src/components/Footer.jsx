// import components
import HeaderLinks from './HeaderLinks';
import links from '../data/links';
// import images
import bookMarkLogo from '/images/logo-bookmark.svg';
import iconFacebook from '/images/icon-facebook.svg';
import iconTwitter from '/images/icon-twitter.svg';

export default function Footer() {
  return (
    <footer
      className="footer flex flex-col"
      aria-labelledby="Footer of the website, end of it."
    >
      <div className="footer__top flex">
        <nav className="footer__nav flex">
          <div className="header__logo">
            <img src={bookMarkLogo} alt="" className="header__logo-img" />
          </div>
          <ul className="footer__ul flex">
            {links.links.map((link) => (
              <HeaderLinks
                key={link.name}
                name={link.name}
                href={link.href}
                worth={true}
              />
            ))}
          </ul>
        </nav>
        <div className="footer__logos flex">
          <img src={iconFacebook} alt="Facebook logo icon" />
          <img src={iconTwitter} alt="Twitter Logo Icon" />
        </div>
      </div>
      <small className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </small>
    </footer>
  );
}
