import "./Comment.scss";
import { timeSinceComment } from '../../../../../../utils/timeSinceComment';

function Comment({ id, name, timestamp, comment, onDelete }) {
  return (
    <div key={id} className="comments-item">
      <div className="comments-item__avatar"></div>
      <div className="comments-item__container">
        <div className="comment__name-date">
          <h4 className="comment__container-name">{name}</h4>
          <p className="comment__container-date">
            {timeSinceComment(timestamp)}
          </p>
        </div>
        <p className="comment__text">{comment}</p>
        <button className="comment__delete-button" onClick={() => onDelete(id)}><div className="delete-icon"></div></button>
      </div>
    </div>
  );
}

export default Comment;
