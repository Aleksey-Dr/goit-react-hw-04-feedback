import { useState } from 'react';

import Section from './section';
import FeedbackOptions from './feedbackOptions';
import Statistics from './statistics';
import Notification from './notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (reaction) => {

    switch (reaction) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() !== 0
      ? Math.round((good / countTotalFeedback()) * 100)
      : 0;
  };

  return (
    <div
      style={{
        marginLeft: '24px',
      }}
    >
      <Section text={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={addFeedback}
        />
      </Section>
        
      <Section text={'Statistics'}>
        {countTotalFeedback() !== 0 ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
            : <Notification
              notification={'No feedback given'}
          />
        }
      </Section>
    </div>
  );
};
