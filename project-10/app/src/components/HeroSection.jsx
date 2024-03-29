import 'animate.css';

import heroIllustration from '/images/illustration-hero.svg';

export default function HeroSection() {
  return (
    <section className="cover flex">
      <article className="cover__article flex">
        <h1 className="cover__h1 animate__animated animate__fadeInUp">
          A simple book mark manager
        </h1>
        <p className="cover__p animate__animated animate__fadeInUp animate__delay-2s">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="cover__links flex animate__animated animate__fadeInUp animate__delay-3s">
          <a className="btn primary" href="">
            Get it on Chrome
          </a>
          <a className="btn secondary" href="">
            Get it on Firefox
          </a>
        </div>
      </article>
      <div className="cover__img animate__animated  animate__backInUp">
        <img src={heroIllustration} alt="" />
      </div>
    </section>
  );
}
