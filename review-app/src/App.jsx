import { v4 as uuidv4 } from "uuid";
import {Browser as Router, Route, Routes, Link} from 'react-router-dom';
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

  const handleAddFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <Header title="Review App" />
      <div className="container">
        <FeeddbackForm handleSubmitForm={handleAddFeedback} />
        <FeedbackStats feedbackData={feedback} />
        <FeedbackList feedbackData={feedback} handleDelete={handleDelete} />
      </div>
    </Router>
  );
}
