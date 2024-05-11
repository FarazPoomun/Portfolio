import './Splash.css'


function Splash(){
    return (
      <>
        <div className="greeting-container">
          <div className="greeting-text">Hi, I'm</div>
        </div>
        <div className="loading-container">
          <p className="loading-text" aria-label="Loading">
            <span className="letter" aria-hidden="true">
              F
            </span>
            <span className="letter" aria-hidden="true">
              A
            </span>
            <span className="letter" aria-hidden="true">
              R
            </span>
            <span className="letter" aria-hidden="true">
              A
            </span>
            <span className="letter" aria-hidden="true">
              Z
            </span>
            <span className="blink">|</span>
          </p>
        </div>
        <div className="short-desc-container">
          <div className="short-desc-text">An enthusiastic Full-Stack Developer</div>
        </div>
      </>
    );
};

export default Splash;