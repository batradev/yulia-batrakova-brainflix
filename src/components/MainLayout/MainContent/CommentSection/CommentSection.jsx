import { useEffect, useState } from "react";
import axios from "axios";
import AddComment from "./AddComment/AddComment";
import Comments from "./Comments/Comments";
import "./CommentSection.scss";

const apiPort = process.env.REACT_APP_API_PORT 

function CommentSection({ videoId }) {
  const [comments, setComments] = useState([]);
  let id = videoId;

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        // `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=cbdf096d-46fe-4e06-8496-641c06f1cedf`
        `http://localhost:${apiPort}/api/videos/${id}`
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
        // `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}/comments/${commentId}?api_key=cbdf096d-46fe-4e06-8496-641c06f1cedf`
        `http://localhost:${apiPort}/api/videos/${id}/comments/${commentId}`,
      );
      // fetchComments();
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




// import AddComment from "./AddComment/AddComment";
// import "./CommentSection.scss";
// import Comments from "./Comments/Comments";

// function CommentSection({ mainVideoDetails }) {
//   return (
//     <section className="comments">
//       <div className="comments__count">
//         {mainVideoDetails.comments.length} comments
//       </div>
//       <AddComment />
//       <Comments mainVideoDetails={mainVideoDetails} />
//     </section>
//   );
// }

// export default CommentSection;
