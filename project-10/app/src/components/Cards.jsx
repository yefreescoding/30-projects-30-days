export default function Cards() {
  return (
    <article className="cards flex">
      <div className="cards__info flex">
        <img src="/images/logo-chrome.svg" alt="" />
        <h3>Add to chrome</h3>
        <p>Minimum version 62</p>
      </div>
      <div className="cards__action flex">
        <img src="/images/bg-dots.svg" alt="" />
        <a href="/" className="btn primary">
          Add and install extension
        </a>
      </div>
    </article>
  );
}
