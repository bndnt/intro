import css from "./HWSFeedback.module.css";

const HWSFeedback = ({ good, neutral, bad, positiveFeedback }) => {
  return (
    <div className={css.hwsFeedbackBlock}>
      <ul className={css.hwsFeedbackList}>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Positive:{positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default HWSFeedback;
