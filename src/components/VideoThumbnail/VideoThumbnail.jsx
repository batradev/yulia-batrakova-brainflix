import "./VideoThumbnail.scss";
import imageUrl from "../../assets/images/Upload-video-preview.jpg";

function VideoThumbnail() {
    return (
      <div className="thumbnail-img__container">
        <div className="form__label">VIDEO THUMBNAIL</div>
        <img src={imageUrl} alt="Video Thumbnail" className="thumbnail-img" />
      </div>
    );
  }
  
  export default VideoThumbnail;