import "./NextVideos.scss";
import VideoItem from "./VideoItem/VideoItem";

function NextVideos({ videos, onVideoClick }) {
  return (
    <div className="next-videos">
      <p className="next-videos__label">NEXT VIDEOS</p>
      {videos.map((video) => (
        <VideoItem
          id={video.id}
          image={video.image}
          title={video.title}
          channel={video.channel}
          onVideoClick={onVideoClick}
        />
      ))}
    </div>
  );
}

export default NextVideos;
