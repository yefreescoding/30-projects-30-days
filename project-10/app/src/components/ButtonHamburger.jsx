import iconHamburger from '/images/icon-hamburger.svg';

export default function BtnHamburger() {
  return (
    <button type="button" className="header__btn-mobile">
      <span>mobile toggle</span>
      <img src={iconHamburger} alt="" />
    </button>
  );
}
