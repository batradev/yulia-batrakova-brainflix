import "./UserInfo.scss";
import viewsIcon from "../../../../../assets/images/views.svg";
import likesIcon from "../../../../../assets/images/likes.svg";

function UserInfo({ channel, timestamp, views, likes }) {
  return (
    <div className="video-info__user">
      <div className="video-info__user--left">
        <p className="user__name">By {channel}</p>
        <p className="user__date">{timestamp}</p>
      </div>
      <div className="video-info__user--right">
        <p className="user__view-count">
          <img src={viewsIcon} alt="" className="view-count__icon" />
          {views}
        </p>
        <p className="user__like-count">
          <img src={likesIcon} alt="" className="like-count__icon" />
          {likes}
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
