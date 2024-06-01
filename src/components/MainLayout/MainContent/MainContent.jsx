import CommentSection from "./CommentSection/CommentSection";
import "./MainContent.scss";
import VideoInfo from "./VideoInfo/VideoInfo";

function MainContent({ mainVideoDetails }) {
  return (
    <div className="main-content">
      <div className="video-info">
        <VideoInfo mainVideoDetails={mainVideoDetails} />
      </div>
      <CommentSection mainVideoDetails={mainVideoDetails} />
    </div>
  );
}

export default MainContent;
