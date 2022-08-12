import { useState } from "react";
import Header from "./Components/Header";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeeddbackForm from "./Components/FeedbackForm";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id) => {
    window.confirm("Are you sure you want to delete this review?") &&
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Header title="Review App" />
      <div className="container">
        <FeeddbackForm />
        <FeedbackStats feedbackData={feedback} />
        <FeedbackList feedbackData={feedback} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
