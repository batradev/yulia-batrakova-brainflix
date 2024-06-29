import "./AddComment.scss";
import { useState } from "react";
import axios from "axios";
import UserAvatar from "../../../../Header/HeaderContainer/UserAvatar/UserAvatar";
import CommentButton from "./CommentButton/CommentButton";
import UserInput from "./UserInput/UserInput";

const apiPort = process.env.REACT_APP_API_PORT 

function AddComment({ videoId, onCommentAdded }) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  let id = videoId;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        // `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}/comments?api_key=cbdf096d-46fe-4e06-8496-641c06f1cedf`
        `http://localhost:${apiPort}/api/videos/${id}/comments`,
        {
          name: name,
          comment: comment,
        }
      );
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

// import "./AddComment.scss";
// import UserAvatar from "../../../../Header/HeaderContainer/UserAvatar/UserAvatar";
// import UploadButton from "../../../../Header/HeaderContainer/UploadButton/UploadButton";
// import UserInput from "./UserInput/UserInput";

// function AddComment() {
//   return (
//     <div className="comments__container">
//       <UserAvatar className="alternate" />
//       <div className="form-container">
//         <form className="form">
//           <div className="form__textarea-container">
//             <UserInput />
//           </div>
//           <UploadButton
//             className="form__button"
//             type="submit"
//             buttonText="COMMENT"
//           />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddComment;
