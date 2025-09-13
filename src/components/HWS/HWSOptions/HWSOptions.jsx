import css from "./HWSOptions.module.css";

const HWSOptions = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.hwsOptionFlex}>
      <button onClick={() => updateFeedback("good")} type="button" name="good">
        Good
      </button>
      <button
        onClick={() => updateFeedback("neutral")}
        type="button"
        name="neutral"
      >
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} type="button" name="bad">
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default HWSOptions;
