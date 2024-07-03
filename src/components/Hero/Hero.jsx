// import "./Hero.scss";

// function Hero({ mainVideoDetails }) {
//   return (
//     <section className="hero">
//       <video
//         className="hero__video"
//         controls
//         poster={mainVideoDetails.image}
//         src={mainVideoDetails.video}
//       />
//     </section>
//   );
// }

// export default Hero;


import { useRef, useState } from 'react';
import './Hero.scss';
import playIcon from '../../assets/images/play.svg';
import pauseIcon from '../../assets/images/pause.svg';
import fullscreenIcon from '../../assets/images/fullscreen.svg';
import volumeUpIcon from '../../assets/images/volume_up.svg';
import volumeOffIcon from '../../assets/images/volume_off.svg';

function Hero({ mainVideoDetails }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section className="hero">
      <div className="video-player">
        <video
          ref={videoRef}
          className="video-player__video"
          poster={mainVideoDetails.image}
          src={mainVideoDetails.video + '?api_key=46fe-4e06-8496-641c06f1cedf'}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        ></video>
        <div className="video-player__controls">
          <div className="video-player__control play-pause">
            <button onClick={togglePlayPause}>
              <img src={isPlaying ? pauseIcon : playIcon} alt="Play/Pause" />
            </button>
          </div>
          <div className="video-player__control scrubber">
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => (videoRef.current.currentTime = e.target.value)}
            />
            <div className="video-player__time">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
          <div className="video-player__control volume-fullscreen">
            <button onClick={() => videoRef.current.requestFullscreen()} className="video-player__fullscreen">
              <img src={fullscreenIcon} alt="Fullscreen" />
            </button>
            <div
              className="video-player__volume-container"
              onMouseEnter={() => setShowVolumeControl(true)}
              onMouseLeave={() => setShowVolumeControl(false)}
            >
              <div className="video-player__volume">
                <img src={volume > 0 ? volumeUpIcon : volumeOffIcon} alt="Volume" />
              </div>
              {showVolumeControl && (
                <input
                  type="range"
                  className="video-player__volume-control"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  orient="vertical"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
