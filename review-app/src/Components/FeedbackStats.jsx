export default function FeedbackStats({ feedbackData }) {
  let average =
    feedbackData.reduce((prev, curr) => {
      return prev + curr.rating;
    }, 0) / feedbackData.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4> {feedbackData.length} Reviews </h4>
      <h4> Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
