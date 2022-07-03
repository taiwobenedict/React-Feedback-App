import { createContext, useState } from "react";
import { feedbackData } from "../data/data";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState(feedbackData);
  const [editedFeedback, setFeedbackEdit] = useState({
    item: {},
    editMode: false,
  });

  function FeedbackDeleteHandler(feedbackId) {
    setFeedback(feedback.filter((item) => item.id !== feedbackId));
  }

  function FeedbackCreateHandler(newFeedback) {
    setFeedback([newFeedback, ...feedback]);
  }

  function FeedbackUpdateHandler(newFeedback) {
    setFeedback(
      feedback.map((item) =>
        item.id === newFeedback.id ?  newFeedback  : item
      )
    );
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editedFeedback,
        FeedbackCreateHandler,
        FeedbackUpdateHandler,
        FeedbackDeleteHandler,
        setFeedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
