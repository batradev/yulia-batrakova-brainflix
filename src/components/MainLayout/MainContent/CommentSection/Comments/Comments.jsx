import "./Comments.scss";
import Comment from "./Comment/Comment";

function Comments({ comments, onDelete }) {
  return (
    <div id="comments__list">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          name={comment.name}
          timestamp={comment.timestamp}
          comment={comment.comment}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Comments;


// import "./Comments.scss";
// import Comment from "./Comment/Comment";

// function Comments({ mainVideoDetails }) {
//   return (
//     <div id="comments__list">
//       {mainVideoDetails.comments.map((mainVideoDetails) => (
//         <Comment
//           id={mainVideoDetails.id}
//           name={mainVideoDetails.name}
//           timestamp={mainVideoDetails.timestamp}
//           comment={mainVideoDetails.comment}
//         />
//       ))}
//     </div>
//   );
// }

// export default Comments;