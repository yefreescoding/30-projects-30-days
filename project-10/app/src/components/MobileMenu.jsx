/* eslint-disable react/prop-types */
import bookMarkLogo from '/images/logo-bookmark.svg';
import iconClose from '/images/icon-close.svg';
import iconFacebook from '/images/icon-facebook.svg';
import iconTwitter from '/images/icon-twitter.svg';

import links from '../data/links';

import HeaderLinks from './HeaderLinks';

export default function MobileMenu({ ariaExpanded, handleClose }) {
  return (
    <div className="mobile_menu" aria-expanded={ariaExpanded}>
      <div className="mobile_menu__actions">
        <div className="flex">
          <img
            src={bookMarkLogo}
            alt="Logo of the company"
            className="header__logo-img"
          />
          <button className="mobile_menu__close">
            <img src={iconClose} alt="Icon close logo" onClick={handleClose} />
          </button>
        </div>
        <ul className="flex">
          {links.links.map((link) => (
            <HeaderLinks
              key={link.name}
              name={link.name}
              href={link.href}
              worth={true}
            />
          ))}
          <li>
            <button className="mobile_menu__login" type="button">
              LOGIN
            </button>
          </li>
        </ul>
      </div>
      <div className="mobile_menu__socials flex">
        <img src={iconFacebook} alt="Facebook logo icon" />
        <img src={iconTwitter} alt="Twitter Logo Icon" />
      </div>
    </div>
  );
}
