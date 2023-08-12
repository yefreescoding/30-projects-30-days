// import components
import QuesAnswTabs from './QuesAnswTabs';

import infoData from '../data/questions.json';

export default function QuestionsAnswers() {
  return (
    <div>
      <article className="">
        {infoData.map((tab) => (
          <QuesAnswTabs
            key={tab.id}
            question={tab.question}
            answer={tab.answer}
          />
        ))}
      </article>
    </div>
  );
}
