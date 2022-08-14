export default function FeedbackStats({ feedback }) {
  let average =
    feedback.reduce((prev, curr) => {
      return prev + curr.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4> {feedback.length} Reviews </h4>
      <h4> ating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
