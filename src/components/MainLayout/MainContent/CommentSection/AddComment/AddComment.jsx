import "./AddComment.scss";
import { useState } from "react";
import axios from "axios";
import UserAvatar from "../../../../Header/HeaderContainer/UserAvatar/UserAvatar";
import CommentButton from "./CommentButton/CommentButton";
import UserInput from "./UserInput/UserInput";

const apiPort = process.env.REACT_APP_API_PORT;

function AddComment({ videoId, onCommentAdded }) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  let id = videoId;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:${apiPort}/videos/${id}/comments`, {
        name: name,
        comment: comment,
      });
      onCommentAdded();
      setComment("");
      setName("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="comments__container">
      <UserAvatar className="alternate" />
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__textarea-container">
            <UserInput
              name={name}
              comment={comment}
              onNameChange={(e) => setName(e.target.value)}
              onCommentChange={(e) => setComment(e.target.value)}
            />
          </div>
          <CommentButton
            className="form__button"
            type="submit"
            buttonText="COMMENT"
          />
        </form>
      </div>
    </div>
  );
}

export default AddComment;

