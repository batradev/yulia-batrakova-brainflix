import "./Hero.scss";

function Hero({ mainVideoDetails }) {
  return (
    <section className="hero">
      <video
        className="hero__video"
        controls
        poster={mainVideoDetails.image}
        src={mainVideoDetails.video}
      />
    </section>
  );
}

export default Hero;
