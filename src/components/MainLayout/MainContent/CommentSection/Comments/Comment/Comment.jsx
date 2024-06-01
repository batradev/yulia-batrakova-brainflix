import "./Comment.scss";

function Comment({ id, name, timestamp, comment }) {
  function timeSinceComment(commentDate) {
    const currentDate = new Date();
    const pastDate = new Date(commentDate);
    const timeDiff = currentDate.getTime() - pastDate.getTime();
    const minutes = Math.floor(timeDiff / (1000 * 60));
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let months;
    if ([0, 4, 6, 7, 9, 11].includes(pastDate.getMonth())) {
      months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 31));
    }
    if ([3, 5, 8, 10].includes(pastDate.getMonth())) {
      months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
    }
    if ([1].includes(pastDate.getMonth())) {
      months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 28));
    }
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));

    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return "Just now";
    }
  }

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
      </div>
    </div>
  );
}

export default Comment;
