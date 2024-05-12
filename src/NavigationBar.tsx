import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb as solidFaLightBulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NavigationBar.css';
import { useEffect, useState } from 'react';

function NavigationBar(){
    const darkModeCSSClass = 'dark-mode';
    const lightModeCSSClass = 'light-mode';

const [isDarkModeEnabled, setIsDarkModeEnabled] = useState<boolean>(true);

useEffect(() =>{
   const storageValue = localStorage.getItem("theme-css-value");

   if(storageValue){
if(storageValue != darkModeCSSClass){
       setIsDarkModeEnabled(false);
       localStorage.setItem("theme-css-value", lightModeCSSClass);
}else{
    manageRootTheme(darkModeCSSClass);
    localStorage.setItem("theme-css-value", darkModeCSSClass);
}
   }else{
    manageRootTheme(darkModeCSSClass);
    localStorage.setItem("theme-css-value", darkModeCSSClass);
   }
}, []);

useEffect(() =>{
    let CSSmodeClass = isDarkModeEnabled? darkModeCSSClass: lightModeCSSClass;
manageRootTheme(CSSmodeClass);
localStorage.setItem("theme-css-value", CSSmodeClass);
}, [isDarkModeEnabled])



const manageRootTheme = (themeClass: string): void => {
    const rootElem = document.querySelector(":root");

    if(rootElem){
        rootElem.classList.remove(darkModeCSSClass);
        rootElem.classList.remove(lightModeCSSClass);
        rootElem.classList.add(themeClass);
    }
}

const themeSwitcherClicked = () =>{
    setIsDarkModeEnabled(!isDarkModeEnabled);
}

    return (
      <>
      <div className='navbar-container'>
        <FontAwesomeIcon icon={isDarkModeEnabled? faLightbulb: solidFaLightBulb} className='theme-switcher' onClick={themeSwitcherClicked} />
        </div>
      </>
    );
}

export default NavigationBar;