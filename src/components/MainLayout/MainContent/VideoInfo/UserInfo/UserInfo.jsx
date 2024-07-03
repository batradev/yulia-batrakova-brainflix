import "./UserInfo.scss";
import viewsIcon from "../../../../../assets/images/views.svg";
import likesIcon from "../../../../../assets/images/likes.svg";
import axios from 'axios';
import { useState, useEffect } from 'react';

const apiPort = process.env.REACT_APP_API_PORT 

function getLikedVideos() {
  return JSON.parse(localStorage.getItem('likedVideos')) || {};
}

function UserInfo({ channel, timestamp, views, likes, videoId, refreshVideoDetails }) {
  let id = videoId;
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedVideos = getLikedVideos();
    setIsLiked(likedVideos[videoId]);
  }, [videoId]);

  
  const handleLike = async () => {
    const likedVideos = getLikedVideos();

    if (likedVideos[videoId]) {
      console.log('You have already liked this video');
      return;
    }
    
    try {
      const response = await axios.put(`http://localhost:${apiPort}/api/videos/${id}/likes`);
      // updateLikes(response.data);
      refreshVideoDetails();
      likedVideos[videoId] = true;
      localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
      setIsLiked(true); 
    } catch (error) {
      console.error('Error liking the video', error);
    }
  };
  return (
    <div className="video-info__user">
      <div className="video-info__user--left">
        <p className="user__name">By {channel}</p>
        <p className="user__date">{timestamp}</p>
      </div>
      <div className="video-info__user--right">
        <p className="user__view-count">
          <img src={viewsIcon} alt="eye icon" className="view-count__icon" />
          {views}
        </p>
        {/* <p className="user__like-count">
          <img src={likesIcon} alt="heart icon" className="like-count__icon" onClick={handleLike} />
          {likes}
        </p> */}
        <p className={`user__like-count ${isLiked ? 'liked' : ''}`}>
          <button className="like-button" onClick={handleLike} disabled={isLiked}>
            <img src={likesIcon} alt="heart icon" className="like-count__icon" />
          </button>
          {likes}
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
