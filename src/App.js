import "./App.scss";
import "./styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";

import UploadPage from "./pages/UploadPage/UploadPage";
import VideoPlayerPage from "./pages/VideoPlayerPage/VideoPlayerPage";

const apiPort = process.env.REACT_APP_API_PORT;

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`http://localhost:${apiPort}/videos`);
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<VideoPlayerPage videos={videos} setVideos={setVideos} />}
          />
          <Route path="/upload" element={<UploadPage />} />
          <Route
            path="/video/:videoId"
            element={<VideoPlayerPage videos={videos} setVideos={setVideos} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import "./App.scss";
// import "./styles/main.scss";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import videoDetails from "./data/video-details.json";
// import nextVideos from "./data/videos.json";
// import { useState } from "react";
// import Header from "./components/Header/Header";

// import UploadPage from "./pages/UploadPage/UploadPage";
// import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage';

// function App() {
//   const [mainVideoDetails, setMainVideoDetails] = useState(videoDetails[0]);
//   const [videos, setVideos] = useState(
//     nextVideos.filter((video) => video.id !== mainVideoDetails.id)
//   );

//   const handleVideoSelection = (selectedVideoId) => {
//     const selectedVideo = videoDetails.find(
//       (video) => video.id === selectedVideoId
//     );
//     if (selectedVideo) {
//       setMainVideoDetails(selectedVideo);
//       const filteredVideos = nextVideos.filter(
//         (video) => video.id !== selectedVideoId
//       );

//       setVideos(filteredVideos);
//     }
//   };
//   return (
//     <div className="App">
//       {/* <Header />
//       <Hero mainVideoDetails={mainVideoDetails} />
//       <MainLayout
//         mainVideoDetails={mainVideoDetails}
//         videos={videos}
//         handleVideoSelection={handleVideoSelection}
//       />
//       <UploadPage /> */}
//             <Router>
//         <Header />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <VideoPlayerPage
//                 mainVideoDetails={mainVideoDetails}
//                 videos={videos}
//                 handleVideoSelection={handleVideoSelection}
//               />
//             }
//           />
//           <Route path="/upload" element={<UploadPage />} />
//         </Routes>
//       </Router>
//     </div>

//   );
// }

// export default App;
