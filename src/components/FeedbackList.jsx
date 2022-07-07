import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "../shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

// List of Feedbacks Component
function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (feedback.length === 0) {
    const style = {
      textAlign: "center"
    }
    return (
      <h2 style={style}>Add New Feedback</h2>
    )
  }
  return (
    <>
      {feedback.map((item) => (
        <Feedback item={item} key={item.id} />
      ))}
    </>
  );
}

export default FeedbackList;

// Each Feedback Component
function Feedback({ item }) {
  const { FeedbackDeleteHandler, setFeedbackEdit } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="rating">{item.rating}</div>
      <div className="del-btn">
        <FaTimes  onClick={()=>FeedbackDeleteHandler(item.id)}/>
      </div>
      <div className="edit-btn">
        <FaEdit  onClick={()=>setFeedbackEdit({item, editMode: true})}/>
      </div>
      <p>{item.text}</p>
    </Card>
  );
}
