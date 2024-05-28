import "./Comments.scss";
import Comment from "./Comment/Comment";

function Comments({ mainVideoDetails }) {
  return (
    <div id="comments__list">
      {mainVideoDetails.comments.map((mainVideoDetails) => (
        <Comment
          id={mainVideoDetails.id}
          name={mainVideoDetails.name}
          timestamp={mainVideoDetails.timestamp}
          comment={mainVideoDetails.comment}
        />
      ))}
    </div>
  );
}

export default Comments;
