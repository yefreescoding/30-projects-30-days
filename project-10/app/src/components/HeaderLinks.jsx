/* eslint-disable react/prop-types */
export default function HeaderLinks({ name, href, classNombre }) {
  return (
    <li key={name} className="header__li">
      <a href={href} className={classNombre}>
        {name}
      </a>
    </li>
  );
}
