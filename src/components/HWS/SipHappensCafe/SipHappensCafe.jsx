import HWSDescriptiom from "../HWSDescriptiom/HWSDescriptiom";
import HWSOptions from "../HWSOptions/HWSOptions";
import HWSFeedback from "../HWSFeedback/HWSFeedback";
import HWSNotification from "../HWSNotification/HWSNotification";
import css from "./SipHappensCafe.module.css";
import { useEffect, useState } from "react";

const SipHappensCafe = () => {
  const [review, setReview] = useState(() => {
    const storedReview = localStorage.getItem("cafe-review");
    return storedReview
      ? JSON.parse(storedReview)
      : { good: 0, neutral: 0, bad: 0 };
  });
  const updateFeedback = (feedbackType) => {
    setReview({ ...review, [feedbackType]: review[feedbackType] + 1 });
  };
  const resetFeedback = () => {
    setReview({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = review.good + review.neutral + review.bad;
  const positiveFeedback = Math.round((review.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("cafe-review", JSON.stringify(review));
  }, [review]);
  return (
    <div>
      <HWSDescriptiom />
      <HWSOptions
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <HWSFeedback
          good={review.good}
          neutral={review.neutral}
          bad={review.bad}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <HWSNotification />
      )}
    </div>
  );
};

export default SipHappensCafe;
