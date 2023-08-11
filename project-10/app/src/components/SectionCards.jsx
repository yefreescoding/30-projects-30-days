//  import components
import Cards from './Cards';
import TitleSection from './TitleSection';
import cards from '../data/cards.json';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function SectionCards() {
  useIntersectionObserver('.cards', 'show');
  return (
    <section className="section">
      <TitleSection
        sectionTitle="Download the extension"
        description={`We’ve got more browsers in the pipeline. 
                      Please do let us know if you’ve got a
                      favorites you’d like us to prioritize.`}
      />
      <div className="container_cards flex">
        {cards.cards.map((card) => (
          <Cards
            key={card.id}
            title={card.title}
            link={card.link}
            text={card.text}
            img={card.image}
          />
        ))}
      </div>
    </section>
  );
}
