import heroIllustration from '/images/illustration-hero.svg';

export default function HeroSection() {
  return (
    <section className="cover">
      <article className="cover__article">
        <h1 className="cover__h1">A simple book mark manager</h1>
        <p className="cover__p">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="cover__links">
          <a className="btn_primary" href="">
            Get it on Chrome
          </a>
          <a className="btn_secondary" href="">
            Get it on Firefox
          </a>
        </div>
      </article>
      <div className="cover__img">
        <img src={heroIllustration} alt="" />
      </div>
    </section>
  );
}
