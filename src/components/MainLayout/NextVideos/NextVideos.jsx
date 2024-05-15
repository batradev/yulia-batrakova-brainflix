import './NextVideos.scss';

function NextVideos({ videos, onVideoClick }) {
    return (
        <div className="next-videos">
             {videos.map(video => (
          <div key={video.id} className="video-list__item" onClick={() => onVideoClick(video.id)}>
        <img src={video.image} alt="Thumbnail" className="video-list__thumbnail"/>
        <div className="video-list__details">
            <h3 className="video-list__title">{video.title}</h3>
            <p className="video-list__username">{video.channel}</p>
        </div>
    </div>  ))}
        </div> 
    )
}

export default NextVideos;