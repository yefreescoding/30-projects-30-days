/* eslint-disable react/prop-types */
export default function SliderTabs({
  id,
  title,
  description,
  image,
  ariaLabelBy,
}) {
  return (
    <article className="tab flex" id={id} aria-labelledby={ariaLabelBy}>
      <div className="tab__img">
        <img src={image} alt="" />
      </div>
      <div className="tab__text">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="/" className="btn primary">
          More info
        </a>
      </div>
    </article>
  );
}
