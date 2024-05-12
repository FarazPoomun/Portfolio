import './Splash.css'

function Splash(){

  setTimeout(()=>{
    const startupContainer = document.getElementById("startup-container");
    startupContainer?.classList.add('startup-container-transitioned');
  }, 5000);

    return (
      <>
      <div className='startup-container' id='startup-container'>
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
          <div className="short-desc-text subtext">Senior Full-Stack Developer</div>
        </div>
      </>
    );
};

export default Splash;