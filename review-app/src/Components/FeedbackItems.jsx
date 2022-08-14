import { FaSith } from "react-icons/fa";
import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./Shared/Card";
import FeedbackContext from "../Context/FeedbackContext";

export default function FeedbackItem({ data}) {
  const { handleDelete } = useContext(FeedbackContext);
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
