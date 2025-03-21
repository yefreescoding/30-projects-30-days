import { ArticlesCard } from "./ui/ArticlesCard";
import { FadeUp } from "../hooks/FadeUp";

export const SectionArticles = () => {
  return (
    <section className="section even">
      <h2 className="text-3xl font-semibold my-8">Latest Articles</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <FadeUp delay={0.2}>
          <ArticlesCard
            id="09877"
            img="/images/image-currency.jpg"
            author="Claire Robinson"
            title="Receive money in any currency with no fees"
            desc="Receive money in any currency with no fees The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single..."
          />
        </FadeUp>
        <FadeUp delay={0.4}>
          <ArticlesCard
            id="09878"
            img="/images/image-restaurant.jpg"
            author="Wilson Hutton"
            title="Treat yourself without worrying about money"
            desc=" Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
          />
        </FadeUp>
        <FadeUp delay={0.6}>
          <ArticlesCard
            id="09878"
            img="/images/image-plane.jpg"
            author="Wilson Hutton"
            title="Take your Easybank card wherever you go"
            desc="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
          />
        </FadeUp>
        <FadeUp delay={0.8}>
          <ArticlesCard
            id="09878"
            img="/images/image-confetti.jpg"
            author="Claire Robinson"
            title="Our invite-only Beta accounts are now live!"
            desc="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
          />
        </FadeUp>
      </div>
    </section>
  );
};
