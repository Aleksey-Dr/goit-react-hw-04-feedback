import Section from './section';
import FeedbackOptions from './feedbackOptions';

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
    </div>
  );
};
