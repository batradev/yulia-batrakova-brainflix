import "./VideoInfo.scss";
import VideoTitle from "./VideoTitle/VideoTitle";
import UserInfo from "./UserInfo/UserInfo";
import Description from "./Description/Description";
// import { useState } from 'react';

function VideoInfo({ mainVideoDetails, refreshVideoDetails  }) {
  // const [likes, setLikes] = useState(mainVideoDetails.likes);
  const videoDate = new Date(mainVideoDetails.timestamp);

  // const updateLikes = (newLikes) => {
  //   setLikes(newLikes);
  // };
  return (
    <>
      <VideoTitle title={mainVideoDetails.title} />
      <UserInfo
        channel={mainVideoDetails.channel}
        timestamp={videoDate.toLocaleDateString("en-GB")}
        views={mainVideoDetails.views}
        likes={mainVideoDetails.likes}
        videoId={mainVideoDetails.id}
        // updateLikes={updateLikes}
        refreshVideoDetails={refreshVideoDetails}
      />
      <Description description={mainVideoDetails.description} />
    </>
  );
}

export default VideoInfo;
