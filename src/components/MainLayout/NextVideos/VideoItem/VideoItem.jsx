import "./VideoItem.scss";

function VideoItem({ id, image, title, channel, onVideoClick }) {
  return (
    <div key={id} className="video-list__item" onClick={() => onVideoClick(id)}>
      <div className="video-list__image-container">
        <img src={image} alt="Thumbnail" className="video-list__thumbnail" />
      </div>
      <div className="video-list__details">
        <h3 className="video-list__title">{title}</h3>
        <p className="video-list__username">{channel}</p>
      </div>
    </div>
  );
}

export default VideoItem;