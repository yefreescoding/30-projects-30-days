/* eslint-disable react/prop-types */

import 'animate.css';

export default function TitleSection({ sectionTitle, description }) {
  return (
    <div className="title_section">
      <h2 className="section__h2 animate__animated animate__fadeInUp">
        {sectionTitle}
      </h2>
      <p className="section__p animate__animated animate__fadeInUp animate__delay-2s">
        {description}
      </p>
    </div>
  );
}
