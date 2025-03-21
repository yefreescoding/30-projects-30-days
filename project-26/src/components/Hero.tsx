import { FadeUp } from "../hooks/FadeUp";

export const Hero = () => {
  return (
    <section className="section even min-h-[100dvh] flex flex-wrap-reverse md:flex-nowrap items-center">
      <div className="bg-white rounded-b-3xl md:rounded-br-none md:rounded-l-3xl p-6 flex w-full max-w-400px h-[500px] flex-col gap-8 items-start justify-center">
        <h1 className="flex-1 text-text-base text-4xl md:text-6xl  text-balance my-4">
          <FadeUp delay={0.2}>
            <div>Next generation digital banking</div>
          </FadeUp>
        </h1>
        <FadeUp delay={0.4}>
          <p className="text-balance  text-text-light text-lg">
            Take your <strong>financial life online</strong>. Your Easybank
            account will be a one-stop-shop for spending, saving, budgeting,
            investing, and much more.
          </p>
        </FadeUp>
        <FadeUp delay={0.6}>
          <div className="flex gap-2 w-fit">
            <a className="btn request-btn" href="#">
              Request Invite
            </a>
            <a className="btn book-call-btn" href="#">
              Learn More
            </a>
          </div>
        </FadeUp>
      </div>
      <div className="relative overflow-hidden rounded-t-3xl md:rounded-3xl shadow-2xl w-full md:max-w-[600px] h-[400px] md:h-full">
        <img
          loading="lazy"
          src="images/hero-img-2.jpeg"
          alt="hero"
          className="top-0 w-full object-cover object-center"
        />
      </div>
    </section>
  );
};
