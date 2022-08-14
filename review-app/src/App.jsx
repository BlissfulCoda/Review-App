import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FeedbackProvider } from "./Context/FeedbackContext";
import AboutPageLink from "./Components/AboutIconLink";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeeddbackForm from "./Components/FeedbackForm";
import AboutPage from "./Components/AboutPage";

export default function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header title="Review App" />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeeddbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutPageLink />
                </>
              }
            />
          </Routes>
        </div>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}
