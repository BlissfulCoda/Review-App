import { useState } from "react";
import Header from "./Components/Header";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./Components/FeedbackList";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <div>
      <Header title="Review App" />
      <FeedbackList feedbackData={feedback} />
    </div>
  );
}
