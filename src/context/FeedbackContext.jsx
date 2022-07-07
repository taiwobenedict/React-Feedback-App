import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([]);

  // Fetchiing data from database on load
  useEffect(() => {
    fetch("/feedbacks")
      .then((response) => response.json())
      .then((data) => setFeedback(data));

  }, []);

  const [editedFeedback, setFeedbackEdit] = useState({
    item: {},
    editMode: false,
  });

  function FeedbackDeleteHandler(feedbackId) {
    fetch(`/feedbacks/${feedbackId}`,{method: "DELETE"})

    setFeedback(feedback.filter((item) => item.id !== feedbackId));
  }

  function FeedbackCreateHandler(newFeedback) {
    fetch("/feedbacks", {
      method: 'POST',
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify(newFeedback)  
    }).then(response => response.json())
      .then(data => setFeedback([data, ...feedback])  )
  }

  function FeedbackUpdateHandler(newFeedback) {
    fetch(`/feedbaks/${newFeedback.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    })
      .then((response) => response.json())
      .then((data) => setFeedback([...feedback]));
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
