import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItems";
import FeedbackContext from "../Context/FeedbackContext";
import Spinner from "./Shared/Spinner";

export default function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>loading data...</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <AnimatePresence>
        {feedback.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <FeedbackItem key={feedback.id} data={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
