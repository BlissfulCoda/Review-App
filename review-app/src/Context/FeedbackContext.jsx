import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../Data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const handleDelete = (id) => {
    window.confirm("Are you sure you want to delete this review?") &&
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  const handleAddFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        handleAddFeedback,
        editFeedback,
      }}
    >
      {" "}
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
