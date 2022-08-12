import { useState } from "react";
import Header from "./Components/Header";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <div>
      <Header title="Review App" />
      <div className="container">
        <FeedbackStats feedbackData={feedback} />
        <FeedbackList feedbackData={feedback} />
      </div>
    </div>
  );
}
