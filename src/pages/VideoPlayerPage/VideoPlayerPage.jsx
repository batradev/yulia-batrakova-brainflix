import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import MainLayout from "../../components/MainLayout/MainLayout";

const apiPort = process.env.REACT_APP_API_PORT;

function VideoPlayerPage({ videos, setVideos }) {
  let { videoId } = useParams();

  const [mainVideoDetails, setMainVideoDetails] = useState(null);
  const [nextVideos, setNextVideos] = useState([]);

  if (!videoId && videos.length > 0) {
    videoId = videos[0].id;
  }

  const fetchVideoDetails = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:${apiPort}/videos/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching video details:", error);
      return null;
    }
  };

  const updateVideoDetails = async () => {
    let videoDetails = videos.find((video) => video.id === videoId);

    videoDetails = await fetchVideoDetails(videoId);
    setVideos((prevVideos) => {
      if (!prevVideos.find((video) => video.id === videoId)) {
        return [...prevVideos, videoDetails];
      }
      return prevVideos;
    });

    setMainVideoDetails(videoDetails);
    setNextVideos(videos.filter((video) => video.id !== videoId));
  };

  useEffect(() => {
    if (videoId) {
      updateVideoDetails();
    }
  }, [videoId, videos]);


 if (!mainVideoDetails) {
    return <div>Loading...</div>;
  }
  
  return (
    <main>
      <Hero mainVideoDetails={mainVideoDetails} />
      <MainLayout
        mainVideoDetails={mainVideoDetails}
        videos={nextVideos}
        videoId={videoId}
        refreshVideoDetails={updateVideoDetails}
      />
    </main>
  );
}

export default VideoPlayerPage;





// BEFORE API
// if (!videoId && videos) {
//   videoId = videos[0].id
// }

// const findVideoDetails = () => {
//   return videoDetails.find(
//     (video) => video.id === videoId
//   );
// }

// const findNextVideos = () => {
//   return videos.filter((video) => video.id !== videoId);
// }

// const [mainVideoDetails, setMainVideoDetails] = useState(findVideoDetails());
// const [nextVideos, setNextVideos] = useState(findNextVideos());

// useEffect(() => {
//   if (videoId) {
//     setMainVideoDetails(findVideoDetails());
//     setNextVideos(findNextVideos());
//   }
// }, [videoId]);

// BEFORE ID
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
