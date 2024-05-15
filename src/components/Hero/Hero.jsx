import './Hero.scss';

function Hero( {mainVideoDetails}) {
    return (
        <div className="hero">
        <video
          className="hero__video"
          controls poster={mainVideoDetails.image}
          src={mainVideoDetails.video}
        />
        </div>
    )
}

export default Hero;