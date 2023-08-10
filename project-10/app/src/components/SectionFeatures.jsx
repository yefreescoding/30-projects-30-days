// import components
import TitleSection from './TitleSection';
import Slider from './Slider';

export default function FeaturesSection() {
  return (
    <section className="section">
      <TitleSection
        sectionTitle="Features"
        description={`Our aim is to make it quick and easy for you 
          to access your favorites websites. Your bookmarks sync 
          between your devices so you can access them on the go`}
      />
      <Slider />
    </section>
  );
}
