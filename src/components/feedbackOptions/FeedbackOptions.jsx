import PropTypes from 'prop-types';
import clsx from 'clsx';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={clsx(css['feedback-btns'])}>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            value={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
};

export default FeedbackOptions;