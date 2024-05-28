import AddComment from "./AddComment/AddComment";
import "./CommentSection.scss";
import Comments from "./Comments/Comments";

function CommentSection({ mainVideoDetails }) {
  return (
    <section className="comments">
      <div className="comments__count">
        {mainVideoDetails.comments.length} comments
      </div>
      <AddComment />
      <Comments mainVideoDetails={mainVideoDetails} />
    </section>
  );
}

export default CommentSection;
