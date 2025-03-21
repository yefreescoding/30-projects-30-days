import { InfoCards } from "./ui/InfoCards";
import { FadeUp } from "../hooks/FadeUp";

const infoData = [
  {
    id: "0098",
    title: "Online Banking",
    info: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    link: "#",
    img: "images/icon-online.svg",
  },
  {
    id: "0097",
    title: "Simple Budgeting",
    info: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    link: "#",
    img: "images/icon-budgeting.svg",
  },
  {
    id: "0096",
    title: "Fast Onboarding",
    info: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    link: "#",
    img: "images/icon-onboarding.svg",
  },
  {
    id: "0095",
    title: "Open API",
    info: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    link: "#",
    img: "images/icon-api.svg",
  },
];

export const SectionInfo = () => {
  return (
    <section className="section odd grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article className="p-4">
        <h2 className="text-3xl font-semibold ">Why choose Easybank?</h2>
        <p className="my-4">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <a href="#" className="btn book-call-btn">
          Request Invite
        </a>
      </article>
      {infoData.map((item, index) => (
        <FadeUp key={item.id} delay={index * 0.2}>
          <InfoCards {...item} />
        </FadeUp>
      ))}
      <FadeUp delay={infoData.length * 0.2}>
        <article className="overflow-hidden rounded-3xl w-full h-full max-h-[235px]">
          <img
            src="images/hero-img.jpeg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </article>
      </FadeUp>
    </section>
  );
};
