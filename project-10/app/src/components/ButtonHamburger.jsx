/* eslint-disable react/prop-types */
import iconHamburger from '/images/icon-hamburger.svg';

export default function BtnHamburger({ handleClick }) {
  return (
    <button type="button" className="header__btn-mobile" onClick={handleClick}>
      <span>mobile toggle</span>
      <img src={iconHamburger} alt="" />
    </button>
  );
}
