import { Link } from "react-router-dom";
import "./NextVideos.scss";
import VideoItem from "./VideoItem/VideoItem";

function NextVideos({ videos }) {
  return (
    <section className="next-videos">
      <p className="next-videos__label">NEXT VIDEOS</p>
      <ul>
        {videos.map((video) => (
          <Link
            key={video.id}
            to={`/video/${video.id}`}
            className="next-videos__link"
          >
            <VideoItem
              id={video.id}
              image={video.image}
              title={video.title}
              channel={video.channel}
            />
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default NextVideos;




// import "./NextVideos.scss";
// import VideoItem from "./VideoItem/VideoItem";

// function NextVideos({ videos, onVideoClick }) {
// return (
// <div className="next-videos">
// <p className="next-videos__label">NEXT VIDEOS</p>
// {videos.map((video) => (
// <VideoItem
//        id={video.id}
//        image={video.image}
//        title={video.title}
//        channel={video.channel}
//        onVideoClick={onVideoClick}
//      />
// ))}
// </div>
// );
// }

// export default NextVideos;
