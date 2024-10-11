import { useEffect, useState } from "react";
import axios from "axios";
import AddComment from "./AddComment/AddComment";
import Comments from "./Comments/Comments";
import "./CommentSection.scss";

const apiPort = process.env.REACT_APP_API_PORT;

function CommentSection({ videoId }) {
  const [comments, setComments] = useState([]);
  let id = videoId;

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:${apiPort}/videos/${id}`
      );
      const sortedComments = response.data.comments.sort((a, b) => {
        let dateA = new Date(a.timestamp);
        let dateB = new Date(b.timestamp);
        return dateB - dateA;
      });
      setComments(sortedComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCommentAdded = () => {
    fetchComments();
  };

  const handleCommentDelete = async (commentId) => {
    try {
      const response = await axios.delete(
        `http://localhost:${apiPort}/videos/${id}/comments/${commentId}`
      );
      const sortedComments = response.data.sort((a, b) => {
        let dateA = new Date(a.timestamp);
        let dateB = new Date(b.timestamp);
        return dateB - dateA;
      });
      setComments(sortedComments);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  return (
    <section className="comments">
      <div className="comments__count">{comments.length} comments</div>
      <AddComment videoId={videoId} onCommentAdded={handleCommentAdded} />
      <Comments comments={comments} onDelete={handleCommentDelete} />
    </section>
  );
}

export default CommentSection;