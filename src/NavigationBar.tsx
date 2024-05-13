
import "./NavigationBar.css";
import { useEffect, useState } from "react";

import CV from "./assets/CV.pdf";

function NavigationBar() {
  const darkModeCSSClass = "dark-mode";
  const lightModeCSSClass = "light-mode";

  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState<boolean>(true);

  useEffect(() => {
    const storageValue = localStorage.getItem("theme-css-value");
    let CSSmodeClass = lightModeCSSClass;

    if (storageValue) {
      if (storageValue != darkModeCSSClass) {
        setIsDarkModeEnabled(false);
      } else {
        CSSmodeClass = darkModeCSSClass;
      }
    } else {
      CSSmodeClass = darkModeCSSClass;
    }
    manageRootTheme(CSSmodeClass);
    localStorage.setItem("theme-css-value", CSSmodeClass);
  }, []);

  useEffect(() => {
    let CSSmodeClass = isDarkModeEnabled ? darkModeCSSClass : lightModeCSSClass;
    manageRootTheme(CSSmodeClass);
    localStorage.setItem("theme-css-value", CSSmodeClass);
  }, [isDarkModeEnabled]);

  const manageRootTheme = (themeClass: string): void => {
    const rootElem = document.querySelector(":root");

    if (rootElem) {
      rootElem.classList.remove(darkModeCSSClass);
      rootElem.classList.remove(lightModeCSSClass);
      rootElem.classList.add(themeClass);
    }
  };

  const themeSwitcherClicked = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  return (
    <>
      <div className="navbar-container">
        <a
          href={CV}
          download="MyExampleDoc"
          target="_blank"
          className="download-btn"
        >
          <svg
            className="w-6 h-6 text-white-800 dark:text-white navbar-btn"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        {isDarkModeEnabled ? (
          <svg
            className="w-6 h-6 text-white-800 dark:text-white navbar-btn"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
              clip-rule="evenodd"
              onClick={themeSwitcherClicked}
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-white-800 dark:text-white navbar-btn"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
              clip-rule="evenodd"
              onClick={themeSwitcherClicked}
            />
          </svg>
        )}
      </div>
    </>
  );
}

export default NavigationBar;
