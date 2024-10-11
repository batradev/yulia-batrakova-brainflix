import "./MainLayout.scss";
import MainContent from "./MainContent/MainContent";
import NextVideos from "./NextVideos/NextVideos";

function MainLayout({ mainVideoDetails, videos, videoId, refreshVideoDetails }) {
  return (
    <div className="main-layout">
      <MainContent mainVideoDetails={mainVideoDetails} videoId={videoId} refreshVideoDetails={refreshVideoDetails}/>
      <NextVideos videos={videos} />
     
    </div>
  );
}

export default MainLayout;