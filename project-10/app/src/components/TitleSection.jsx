/* eslint-disable react/prop-types */
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import 'animate.css';

export default function TitleSection({ sectionTitle, description }) {
  useIntersectionObserver('.section__text', 'animate__fadeInUp');
  return (
    <div className="title_section">
      <h2 className="section__text animate__animated ">{sectionTitle}</h2>
      <p className="section__text animate__animated animate__delay-2s">
        {description}
      </p>
    </div>
  );
}
