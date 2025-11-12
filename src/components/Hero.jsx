import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I am Priyam,<br />
            <span className="hero-subtitle">Creative Technologist</span>
          </h1>
          <p className="hero-description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
            sunt nostrud amet.
          </p>
          <button className="resume-button">Download Resume</button>
        </div>
        <div className="hero-image">
          <div className="profile-picture">
            <div className="profile-placeholder">
              <span>PT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

