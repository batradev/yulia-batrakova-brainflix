
import "./App.scss";
import "./styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import allVideos from "./data/videos.json";
import Header from "./components/Header/Header";

import UploadPage from "./pages/UploadPage/UploadPage";
import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <VideoPlayerPage
                videos={allVideos}
              />
            }
          />
          <Route path="/upload" element={<UploadPage />} />
          <Route
            path="/video/:videoId"
            element={
              <VideoPlayerPage
                videos={allVideos}
              />
            }
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
