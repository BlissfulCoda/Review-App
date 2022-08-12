import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItems";

export default function FeedbackList({ feedbackData }) {
  if (!feedbackData || feedbackData.length === 0) {
    return <p>loading data...</p>;
  }
  return (
    <div>
      {feedbackData.map((feedback) => (
        <FeedbackItem key={feedback.id} data={feedback} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedbackData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
