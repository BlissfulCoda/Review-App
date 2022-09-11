import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch Data
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?&_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // Delete an item
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Add an item
  const handleAddFeedback = async (newFeedback) => {
    const response = await fetch(`/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  // Edit an item
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update an item
  const updateFeedback = async (id, updateItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...data, ...updateItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        handleAddFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {" "}
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
