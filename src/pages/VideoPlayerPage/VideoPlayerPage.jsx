
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import videoDetails from '../../data/video-details.json';
import Hero from '../../components/Hero/Hero';
import MainLayout from '../../components/MainLayout/MainLayout';

function VideoPlayerPage({ videos }) {
  let { videoId } = useParams();
  
  if (!videoId && videos) {
    videoId = videos[0].id
  }

  const findVideoDetails = () => {
    return videoDetails.find(
      (video) => video.id === videoId
    );
  }
  
  const findNextVideos = () => {
    return videos.filter((video) => video.id !== videoId);
  }
  
  const [mainVideoDetails, setMainVideoDetails] = useState(findVideoDetails());
  const [nextVideos, setNextVideos] = useState(findNextVideos());
  
  useEffect(() => {
    if (videoId) {
      setMainVideoDetails(findVideoDetails());
      setNextVideos(findNextVideos());
    }
  }, [videoId]);

  return (
    <>
      <Hero mainVideoDetails={mainVideoDetails} />
      <MainLayout
        mainVideoDetails={mainVideoDetails}
        videos={nextVideos}
      />
    </>
  );
}

export default VideoPlayerPage;





// import Hero from '../../components/Hero/Hero';
// import MainLayout from '../../components/MainLayout/MainLayout';

// function VideoPlayerPage({ mainVideoDetails, videos, handleVideoSelection }) {
//   return (
//     <>
//       <Hero mainVideoDetails={mainVideoDetails} />
//       <MainLayout
//         mainVideoDetails={mainVideoDetails}
//         videos={videos}
//         handleVideoSelection={handleVideoSelection}
//       />
//     </>
//   );
// }

// export default VideoPlayerPage;  