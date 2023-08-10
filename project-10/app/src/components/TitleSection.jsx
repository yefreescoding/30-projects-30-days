/* eslint-disable react/prop-types */
export default function TitleSection({ sectionTitle, description }) {
  return (
    <div>
      <h2 className="section__h2">{sectionTitle}</h2>
      <p className="section__p">{description}</p>
    </div>
  );
}
