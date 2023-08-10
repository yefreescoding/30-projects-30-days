/* eslint-disable react/prop-types */
export default function Cards({ title, text, img, link, animation }) {
  return (
    <article className={`cards flex ${animation}`}>
      <div className="cards__info flex">
        <img src={`/images/${img}`} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="cards__action flex">
        <img src="/images/bg-dots.svg" alt="" />
        <a href={link} className="btn primary">
          Add and install extension
        </a>
      </div>
    </article>
  );
}
