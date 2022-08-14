import { v4 as uuidv4 } from "uuid";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import AboutPageLink from "./Components/AboutIconLink";
import { useState } from "react";
import Header from "./Components/Header";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeeddbackForm from "./Components/FeedbackForm";
import AboutPage from "./Components/AboutPage";
import Card from "./Components/Shared/Card";

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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeeddbackForm handleSubmitForm={handleAddFeedback} />
                <FeedbackStats feedbackData={feedback} />
                <FeedbackList
                  feedbackData={feedback}
                  handleDelete={handleDelete}
                />
                <AboutPageLink />
                <Card>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </Card>
              </>
            }
          />
        </Routes>
      </div>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
