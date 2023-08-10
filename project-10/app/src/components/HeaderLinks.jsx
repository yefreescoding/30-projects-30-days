/* eslint-disable react/prop-types */
export default function HeaderLinks({ name, href, worth = true }) {
  return (
    <li key={name} className="header__li">
      <a href={href} className={worth ? 'btn primary' : 'btn secondary'}>
        {name}
      </a>
    </li>
  );
}
