import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStat() {
  const { feedback } = useContext(FeedbackContext);
  const average =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;
  const averageRating = NaN ? 0 : average.toFixed(1);

  return (
    <div className="feedback-stat">
      <h3>{feedback.length} Reviews</h3>
      <h3>Average Rating {isNaN(averageRating)? 0: averageRating}</h3>
    </div>
  );
}

export default FeedbackStat;
