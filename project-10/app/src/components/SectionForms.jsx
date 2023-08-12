export default function SectionForm() {
  return (
    <form className="form flex flex-col">
      <span className="form__span">35.000+ already joined</span>
      <h2>Stay up-to-date with what we are doing</h2>
      <div className="form__action flex">
        <input type="email" placeholder="Enter your email address" />
        <button className="btn-act" type="submit">
          Contact us
        </button>
      </div>
    </form>
  );
}
