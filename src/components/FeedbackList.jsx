import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "../shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

// List of Feedbacks Component
function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
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
