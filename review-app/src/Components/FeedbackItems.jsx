import { FaSith } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./Shared/Card";

export default function FeedbackItem({ data, handleDelete }) {
  const { id, rating, text } = data;
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button className="close" onClick={() => handleDelete(id)}>
        <FaSith color="purple" />
      </button>
    </Card>
  );
}

FeedbackItem.propTypes = {
  data: PropTypes.object,
};
