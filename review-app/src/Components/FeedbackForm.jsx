import { useState } from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";
import RatingStats from "./RatingStats";

export default function FeeddbackForm({ handleSubmitForm }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleText = (e) => {
    if (text === "") {
      setIsDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.length <= 10) {
      setIsDisabled(true);
      setMessage("Please leave a longer review");
    } else {
      setMessage(null);
      setIsDisabled(false);
    }

    setText(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleSubmitForm(newFeedback);
      setText("");
    }
  };

  return (
    <Card className="input">
      <form onSubmit={handleSubmit}>
        <h2>What would you rate this service ?</h2>
        <RatingStats select={(rating) => setRating(rating)} />
        <section className="input-group">
          <input
            onChange={handleText}
            type="text"
            placeholder="Enter a review"
            value={text}
          />
          <Button type="submit" version="primary" isDisabled={isDisabled}>
            Click Me
          </Button>
        </section>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
