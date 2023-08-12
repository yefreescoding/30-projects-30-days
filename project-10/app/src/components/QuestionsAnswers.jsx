// import components
import QuesAnswTabs from './QuesAnswTabs';

import infoData from '../data/questions.json';

export default function QuestionsAnswers() {
  return (
    <div className="section_questions__tabs">
      {infoData.map((tab) => (
        <QuesAnswTabs
          key={tab.id}
          question={tab.question}
          answer={tab.answer}
        />
      ))}
    </div>
  );
}
