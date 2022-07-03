import Card from "../shared/Card";
import Button from "../shared/Button";
import { useState, useContext, useEffect } from "react";
import { v4 as uui4 } from "uuid";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");
  const [btnDisability, setBtnDisability] = useState(true);
  const [rate, setRate] = useState(10);

  // Using Context Datas
  const {
    FeedbackCreateHandler,
    editedFeedback,
    FeedbackUpdateHandler,
    setFeedbackEdit,
  } = useContext(FeedbackContext);

  // Form Validation Handler
  function inputHandler(e) {
    setInput(e.target.value);
    if (e.target.value === "") {
      setMessage("");
      setBtnDisability(true);
    } else if (input.trim().length === 0 || input.trim().length < 10) {
      setMessage("Input should not be less than 10 characters");
      setBtnDisability(true);
    } else {
      setMessage("");
      setBtnDisability(false);
    }
  }

  function ratingHandler(rateValue) {
    setRate(rateValue);
  }

  function submitHandler(e) {
    e.preventDefault();
    const newFeedback = {
      id: uui4(),
      rating: rate,
      text: input,
    };

    if (editedFeedback.editMode !== true) {
      FeedbackCreateHandler(newFeedback);
      setInput('')
      setBtnDisability(true)
    } else {
      editedFeedback.item.rating = rate;
      editedFeedback.item.text = input;
      FeedbackUpdateHandler(editedFeedback.item);
      setInput("");
      setRate(10);
      setFeedbackEdit({editeMode: false})
    }
  }

  // Populate the form with text edit
  useEffect(() => {
    if (editedFeedback.editMode === true) {
      setInput(editedFeedback.item.text);
      setRate(editedFeedback.item.rating);
      setBtnDisability(false);
    }
  }, [editedFeedback]);

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <Rating rate={rate} ratingHandler={ratingHandler} />
        <div className="input-group">
          <input type="text" value={input} onChange={inputHandler} />
          <Button
            type={"submit"}
            version={"primary"}
            isDisabled={btnDisability}
          >
            Submit
          </Button>
        </div>
        <p className="message">{message}</p>
      </form>
    </Card>
  );
}

export default FeedbackForm;

// Feedback Rating Component

function Rating({ rate, ratingHandler }) {
  const ratingNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ul className="rate-selection">
      {ratingNumbers.map((number) => (
        <li key={number}>
          <input
            type="radio"
            id={`number${number}`}
            checked={rate === number}
            readOnly
          />
          <label
            htmlFor={`number${number}`}
            onClick={() => ratingHandler(number)}
          >
            {number}
          </label>
        </li>
      ))}
    </ul>
  );
}
