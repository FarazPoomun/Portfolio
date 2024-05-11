import './Splash.css'


function Splash(){
    return (
      <>
      <div className='startup-container'>
          <div className="greeting-text text">Hi, I'm</div>
        <div className="loading-container">
          <p className="loading-text text" aria-label="Loading">
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
          <div className="short-desc-text subtext">An enthusiastic Full-Stack Developer</div>
        </div>
      </>
    );
};

export default Splash;