import "./VideoInfo.scss";
import VideoTitle from "./VideoTitle/VideoTitle";
import UserInfo from "./UserInfo/UserInfo";
import Description from "./Description/Description";


function VideoInfo({ mainVideoDetails, refreshVideoDetails  }) {

  const videoDate = new Date(mainVideoDetails.timestamp);

  return (
    <>
      <VideoTitle title={mainVideoDetails.title} />
      <UserInfo
        channel={mainVideoDetails.channel}
        timestamp={videoDate.toLocaleDateString("en-GB")}
        views={mainVideoDetails.views}
        likes={mainVideoDetails.likes}
        videoId={mainVideoDetails.id}
        refreshVideoDetails={refreshVideoDetails}
      />
      <Description description={mainVideoDetails.description} />
    </>
  );
}

export default VideoInfo;
