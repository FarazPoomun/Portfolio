import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Body.css";
import RightBody from "./RightBody";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";

function Body() {
  const contactDiv = useRef<HTMLDivElement>(null);
  const bodyContainerDiv = useRef<HTMLDivElement>(null);

  setTimeout(() => {
    bodyContainerDiv &&
    bodyContainerDiv.current &&
    bodyContainerDiv.current.classList.add("body-container-transitioned");
  }, 4500);

  setTimeout(() => {
    contactDiv &&
      contactDiv.current &&
      contactDiv.current.classList.add("enabled-display");
  }, 6000);

  const redirectToLinkedin = () => {
    window.open('https://www.linkedin.com/in/faraz-poomun/', "_blank");
  };

  return (
    <>
      <div className="outer-body-container">
        <div
          className="body-container"
          ref={bodyContainerDiv}
        >
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

          <div className="contact-section" ref={contactDiv}>
            <FontAwesomeIcon icon={faLinkedin} onClick={redirectToLinkedin}/>
          </div>
        </div>
        <RightBody />
      </div>
      
    </>
  );
}

export default Body;
