import CommentSection from "./CommentSection/CommentSection";
import "./MainContent.scss";
import VideoInfo from "./VideoInfo/VideoInfo";

function MainContent({ mainVideoDetails, videoId }) {
  return (
    <div className="main-content">
      <div className="video-info">
        <VideoInfo mainVideoDetails={mainVideoDetails} />
      </div>
      <CommentSection mainVideoDetails={mainVideoDetails} videoId={videoId} />
    </div>
  );
}

export default MainContent;
