import "./App.scss";
import "./styles/main.scss";
import videoDetails from "./data/video-details.json";
import nextVideos from "./data/videos.json";
import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {
  const [mainVideoDetails, setMainVideoDetails] = useState(videoDetails[0]);
  const [videos, setVideos] = useState(
    nextVideos.filter((video) => video.id !== mainVideoDetails.id)
  );

  const handleVideoSelection = (selectedVideoId) => {
    const selectedVideo = videoDetails.find(
      (video) => video.id === selectedVideoId
    );
    if (selectedVideo) {
      setMainVideoDetails(selectedVideo);
      const filteredVideos = nextVideos.filter(
        (video) => video.id !== selectedVideoId
      );

      setVideos(filteredVideos);
    }
  };
  return (
    <div className="App">
      <Header />
      <Hero mainVideoDetails={mainVideoDetails} />
      <MainLayout
        mainVideoDetails={mainVideoDetails}
        videos={videos}
        handleVideoSelection={handleVideoSelection}
      />
    </div>
  );
}

export default App;
