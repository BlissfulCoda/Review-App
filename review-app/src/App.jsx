import { useState } from "react";
import Header from "./Components/Header";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id) => {
    return setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Header title="Review App" />
      <div className="container">
        <FeedbackStats feedbackData={feedback} />
        <FeedbackList feedbackData={feedback} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
