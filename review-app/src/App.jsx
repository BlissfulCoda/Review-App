import { useState } from "react";
import Header from "./Components/Header";
import FeedbackData from "./Data/FeedbackData";
import FeedbackItem from "./Components/FeedbackItems";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <div>
      <Header title="Review App" />
      <FeedbackItem />
    </div>
  );
}
