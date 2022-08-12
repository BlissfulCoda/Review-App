import PropTypes from "prop-types";
import Card from "./Shared/Card";

export default function FeedbackItem({ data }) {
  const { rating, text } = data;
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  data: PropTypes.object,
};
