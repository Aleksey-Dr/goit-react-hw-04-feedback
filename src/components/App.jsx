import Section from './section';
import FeedbackOptions from './feedbackOptions';
import Statistics from './statistics';

export const App = () => {
  return (
    <div
      style={{
        marginLeft: '24px',
      }}
    >
      <Section text={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys({})}
          onLeaveFeedback=""
        />
      </Section>
        
      <Section>
        <Statistics
          good={'good'}
          neutral={'neutral'}
          bad={'bad'}
          total={'countTotalFeedback'}
          percentage={'countPositiveFeedbackPercentage'}
        />
      </Section>
    </div>
  );
};
