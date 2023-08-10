import Cards from './Cards';
import TitleSection from './TitleSection';

export default function SectionCards() {
  return (
    <section>
      <TitleSection
        sectionTitle="Download the extension"
        description={`We’ve got more browsers in the pipeline. 
                      Please do let us know if you’ve got a
                      favorites you’d like us to prioritize.`}
      />
      <div>
        <Cards />
      </div>
    </section>
  );
}
