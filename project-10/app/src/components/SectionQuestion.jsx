import QuestionsAnswers from './QuestionsAnswers';
import TitleSection from './TitleSection';

export default function SectionQuestions() {
  return (
    <section className="section" aria-labelledby="Frequently asked questions">
      <TitleSection
        sectionTitle="Frequently Asked Questions"
        description={`Here are some of our FAQs. If you have any other questions
                      you’d like answered please feel free to email us.`}
      />
      <QuestionsAnswers />
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn primary"
      >
        More info
      </a>
    </section>
  );
}
