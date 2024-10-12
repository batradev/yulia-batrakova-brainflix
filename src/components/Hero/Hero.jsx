import React, { useRef, useState, useEffect } from "react";
import playIcon from "../../assets/images/play.svg";
import pauseIcon from "../../assets/images/pause.svg";
import fullscreenIcon from "../../assets/images/fullscreen.svg";
import volumeUpIcon from "../../assets/images/volume_up.svg";
import volumeOffIcon from "../../assets/images/volume_off.svg";
import "./Hero.scss";

function Hero({ mainVideoDetails }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("progress", handleProgress);
    }

    return () => {
      if (video) {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("progress", handleProgress);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setCurrentTime(0);
      setDuration(0);
      setBuffered(0);
      setIsPlaying(false);
      video.pause();
      video.load();
    }
  }, [mainVideoDetails]);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    const video = videoRef.current;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    video.volume = e.target.value;
    setVolume(e.target.value);
    setIsMuted(e.target.value === "0");
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      setCurrentTime(video.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration);
    }
  };

  const handleProgress = () => {
    const video = videoRef.current;
    if (video && video.buffered.length > 0) {
      setBuffered(video.buffered.end(video.buffered.length - 1));
    }
  };

  const handleScrub = (e) => {
    const video = videoRef.current;
    if (video) {
      const scrubTime =
        (e.nativeEvent.offsetX / e.target.offsetWidth) * duration;
      video.currentTime = scrubTime;
      setCurrentTime(scrubTime);
    }
  };

  return (
    <section className="hero">
      <video
        className="hero__video"
        ref={videoRef}
        poster={mainVideoDetails.image}
        src={`${mainVideoDetails.video}?api_key=${apiKey}`}
      />

      <div className="hero__controls">
        <div className="hero__controls-section">
          <button
            className="hero__controls-section-button"
            onClick={handlePlayPause}
          >
            <img
              src={isPlaying ? pauseIcon : playIcon}
              alt="Play/Pause"
              className="play-image"
            />
          </button>
        </div>
        <div
          className="hero__controls-section hero__scrubber-container"
          onClick={handleScrub}
        >
          <div className="hero__scrubber">
            <div
              className="hero__scrubber-buffer"
              style={{ width: `${(buffered / duration) * 100}%` }}
            ></div>
            <div
              className="hero__scrubber-played"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
            <div
              className="hero__scrubber-icon"
              style={{ left: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
          <div className="hero__time">
            {Math.floor(currentTime / 60)}:
            {("0" + Math.floor(currentTime % 60)).slice(-2)} /{" "}
            {Math.floor(duration / 60)}:
            {("0" + Math.floor(duration % 60)).slice(-2)}
          </div>
        </div>
        <div className="hero__controls-section">
          <button onClick={() => videoRef.current.requestFullscreen()}>
            <img src={fullscreenIcon} alt="Fullscreen" />
          </button>
          <div
            onMouseEnter={() => setShowVolumeControl(true)}
            onMouseLeave={() => setShowVolumeControl(false)}
          >
            <button onClick={handleMuteUnmute}>
              <img
                src={isMuted ? volumeOffIcon : volumeUpIcon}
                alt="Mute/Unmute"
              />
            </button>
            {showVolumeControl && (
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="hero__volume-range"
                orient="vertical"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
