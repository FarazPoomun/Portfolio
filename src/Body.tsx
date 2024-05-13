import "./Body.css";
import RightBody from "./RightBody";

function Splash() {
  setTimeout(() => {
    const startupContainer = document.getElementById("body-container");
    startupContainer?.classList.add("body-container-transitioned");
  }, 4000);

  return (
    <>
      <div className="outer-body-container">
        <div className="body-container" id="body-container">
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
          <div className="short-desc-text subtext">
            Senior Full-Stack Developer
          </div>
        </div>
        <RightBody />
      </div>
    </>
  );
}

export default Splash;
