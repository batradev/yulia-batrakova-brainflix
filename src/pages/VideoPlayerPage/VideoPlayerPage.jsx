
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
// import videoDetails from '../../data/video-details.json';
import axios from 'axios';
import Hero from '../../components/Hero/Hero';
import MainLayout from '../../components/MainLayout/MainLayout';

function VideoPlayerPage({ videos }) {
  let { videoId } = useParams();

  if (!videoId && videos.length > 0) {
    videoId = videos[0].id;
  }

  const [mainVideoDetails, setMainVideoDetails] = useState(null);
  const [nextVideos, setNextVideos] = useState([]);

  const fetchVideoDetails = async (id) => {
    try {
      const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=cbdf096d-46fe-4e06-8496-641c06f1cedf`);
      setMainVideoDetails(response.data);
      setNextVideos(videos.filter(video => video.id !== id));
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchVideoDetails(videoId);
    }
  }, [videoId, videos]);
  
  if (!mainVideoDetails) {
    return <div>Loading...</div>;
  }
  
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

  return (
    <main>
      <Hero mainVideoDetails={mainVideoDetails} />
      <MainLayout
        mainVideoDetails={mainVideoDetails}
        videos={nextVideos}
        videoId={videoId}
      />
    </main>
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